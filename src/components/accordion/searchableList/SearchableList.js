import { useState } from 'react';

export default function SearchableList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  const searchResults = items.filter(item =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <div>
      <input type='search'
        placeholder="search"
        onChange={handleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>
            {/* {item.toString()} */}
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

// in this case children is a fn where it requires the diff item argument being mapped