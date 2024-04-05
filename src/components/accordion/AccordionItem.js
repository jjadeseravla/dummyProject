import { createContext, useContext } from 'react';

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  
  if (!ctx) {
    throw new Error('AccordionItem related components must be wrapped by <Accordion.Item>')
  }

  return ctx;
}

const AccordionItemContext = createContext();

export default function AccordionItem({ id, className,
  children }) {
  

  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>
      {children}
      </li>
    </AccordionItemContext.Provider>
  )
}