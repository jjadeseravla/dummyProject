import { useState, useRef } from 'react';

export default function SearchableList({ items, itemKeyFn, children }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  
  function handleChange(e) {
    // only want to update state when user stopped typing for x amount of time,
    // not straight away like writing:     setSearchTerm(e.target.value) would do
    if (lastChange.current) {
      clearTimeout(lastChange.current);
      // checks if true, and if true means a timer is currently running and we want to clear it
    }
    lastChange.current = setTimeout(() => { 
      //to clear the stored timer identifier:
      lastChange.current = null;
      setSearchTerm(e.target.value);
    }, 500);
  }

  const searchResults = items.filter(item =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <div>
      <input type='search'
        placeholder="search"
        onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>
            {/* {item.toString()} */}
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

// in this case children is a fn where it requires the diff item argument being mapped