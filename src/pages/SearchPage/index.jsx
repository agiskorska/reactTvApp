import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {ShowCard, SearchForm, Header} from '../../components';

const SearchPage = () => {
    const [showsData, setShowsData] = useState([]);
    const [searchString, setSearchString] = useState("Friends");

    useEffect(() => {
        async function searchAPI() {
            const result = await axios.get("https://api.tvmaze.com/search/shows?q=" + searchString);
            setShowsData(result.data);
        }
        searchAPI();
    }, [searchString]);

    const handleSearch = (userInput) => {
        setSearchString(userInput);
    }
  return (
    <>
        <Header />
        <SearchForm handleSearchSubmission={handleSearch} />
        {showsData.map((s) => <ShowCard key={s["show"].id} data={s["show"]} />)}
    </>
  );
}

export default SearchPage;