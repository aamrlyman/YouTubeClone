import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DATA } from '../../localData';
import { KEY } from '../../localKey';
import { useNavigate, Link, useParams, } from 'react-router-dom';
import VidMapper from '../../components/VidMapper';

const DefaultSearchResults = (props) => {
    const { query } = useParams();
    const [searchResults, setSearchResults] = useState(DATA)

    useEffect(() => { 
        // getSearchResults();
    }, [])
    
    const getSearchResults = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${KEY}&type=video&maxResults=5&part=snippet`
                );
                console.log(searchResults)
                setSearchResults(response.data)
                
            } catch (error) {
                console.log(error.message)
            }
        };
    return (
        <div className='VidMapperContainer'>
            <VidMapper searchResults={searchResults} key={searchResults.etag}/>
        </div>
      );
}
 
export default DefaultSearchResults;