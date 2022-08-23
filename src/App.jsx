import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ShowCard from './components/ShowCard/ShowCard';

import './App.css';

const App = () => {
    const [showsData, setShowsData] = useState([]);
    
    useEffect(() => {
        async function searchAPI() {
            const result = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
            setShowsData(result.data);
        }
        searchAPI();
    }, []);

  return (
    <>
        {showsData.map((s) => <ShowCard key={s["show"].id} data={s["show"]} />)}
    </>
  );
}

export default App;
