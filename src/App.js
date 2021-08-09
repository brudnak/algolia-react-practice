import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  '9TCGANXJGL',
  'ba5db389f0a0d66d90815d5649002488'
);



function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">Andrew Brudnak</a>
        </h1>
        <p className="header-subtitle">
            Interviewing at Algolia
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="products">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
              id="autocomplete"
                className="searchbox"
                translations={{
                  placeholder: 'Search here',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}</div>
    </div>
  );
}


Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
