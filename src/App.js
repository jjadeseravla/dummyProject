import React from 'react';
import Accordion from './components/accordion/Accordion';
import SearchableList from './components/accordion/searchableList/SearchableList';
import { PLACES } from './components/Places/Places';
import Place from './components/Places/Place';


function App() {



  return (
    <div>
      <h2>App is the entry</h2>
      <main>
        <section>
          <Accordion className="accordion">
            <Accordion.Item
              id="experience"
              className="accordion.item">
              <Accordion.Title className="accordion-item-title">
              we have 20y experience
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  you can't go wrong with us
                </p>
                <p>
                  i have to write some meaningless things here
                </p>
              </article>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item
              id="guide"
              className="accordion.item">
            <Accordion.Title className="accordion-item-title">
              we're working with local guides
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  we are no alone in our office, but with local guides for pleasant experience
                </p>
                <p>
                  this is another useless paragraph with info
                </p>
              </article>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </section>
        <section>
          <SearchableList items={PLACES}>
            {(item) =>  <Place item={item} />}
          </SearchableList> 
          {/* inbetween searchableList is children which is expected to be a fn */}
          {/* this is called renderprops, where you pass a fn as children value and then that outputs received fn */}
          <SearchableList items={['item1', 'item2']}>
            {(item) => item}
          </SearchableList>
        </section>
      </main>
    </div>
  );
}

export default App;

