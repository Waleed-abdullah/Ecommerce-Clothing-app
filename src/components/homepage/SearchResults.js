import React, { useEffect, useState } from 'react';
import Card from './Card.js';
import './SearchResults.css';
import axios from 'axios';

const SearchResults = ({ search }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [interests, setInterests] = useState([]);
  const [display, setDisplay] = useState(true);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let cancel = false;
      if (search === '') {
        setSearchResults([]);
        setDisplay(true);
        setDisable(false);
      } else {
        const res = await axios.get(
          `http://localhost:5000/get/users/${search}`
        );
        setDisplay(true);
        setDisable(false);
        if (cancel) return;
        console.log(res.data.results);
        setSearchResults(res.data.results);
      }
      return () => (cancel = true);
    }
    fetchData();
  }, [search]);

  const handleClick = async (event) => {
    setDisplay(false);
    setDisable(true);
    setSearchResults(
      searchResults.filter((result) => result.userID === event.target.id)
    );
    const res = await axios.get(
      `http://localhost:5000/get/interests/${event.target.id}`
    );
    console.log(res.data.interests);
    setInterests(res.data.interests);
  };

  return (
    <div className="searchResultsContainer">
      <h2
        style={{
          textAlign: 'center',
          display: `${display ? 'block' : 'none'}`,
        }}
      >
        Search Results
      </h2>
      {searchResults.map((result) => (
        <button
          disabled={disable}
          id={result.userID}
          className="result"
          onClick={handleClick}
        >
          {result.name}
        </button>
      ))}

      {!display ? (
        <Card searchResult={searchResults[0]} interests={interests} />
      ) : (
        console.log('')
      )}
    </div>
  );
};

export default SearchResults;
