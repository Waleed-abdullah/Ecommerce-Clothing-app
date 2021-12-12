import React, { useEffect, useState } from 'react'
import './SearchResults.css'
import axios from 'axios'

const SearchResults = ({search}) => {
    const [searchResults, setSearchResults] = useState([])
    useEffect(async () => {
        let cancel = false
        if (search === ''){
            setSearchResults([])
        }
        else {
            const res = await axios.get(`http://localhost:5000/get/users/${search}`)
            if (cancel) return
            console.log(res.data.results)
            setSearchResults(res.data.results)
        }
        return () => cancel = true
    }, [search])

    return (
        <div className='searchResultsContainer'>
            <h2 style={{textAlign: 'center'}}>Search Results</h2>

            
        {
            searchResults.map((result) => (
                <div className='result'>{result.name}</div>
            ))
        }
           
        </div>
    )
}

export default SearchResults