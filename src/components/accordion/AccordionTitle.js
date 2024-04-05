import { useAccordionContext } from './Accordion.js';
import { useAccordionItemContext } from './AccordionItem.js';

export default function AccordionTitle({className, children}) {
  const { toggleItem } = useAccordionContext();
  const { id } = useAccordionItemContext();
  return (
    <h3 className={className}  onClick={() => toggleItem(id)}>
    {children}
  </h3>
  )
}