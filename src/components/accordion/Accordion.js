import { createContext, useState, useContext } from 'react';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(' accordion related components must be wrapped by <Accordion>')
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  
  const [openItemId, setOpenItemId] = useState();

  // function openItem(id) {
  //   setOpenItemId(id)
  // }

  // function closeItem() {
  //   setOpenItemId(null)
  // }


  function toggleItem(id) {
    setOpenItemId(prevId => (prevId === id ? null : id));
  }


  const contextValue = { // distributed to all components
    openItemId: openItemId,
    toggleItem,
  }

  return (
    <AccordionContext.Provider value={contextValue}>
    <ul className={className}>
      {children}
    </ul>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem
// so you no longer have to import AccordionItem in
// App.js also doesnt have to be called .Item can be .anything
// used to make sure we know AccordionItem belongs to Accordion
// and should be used inside Accordion like Accordion.Item
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent