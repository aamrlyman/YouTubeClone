import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import {useParams} from "react-router-dom"
import { DATA } from '../../localData';
import { KEY } from '../../localKey';

const SearchResultsPage = (props) => {
    const [searchResults, setSearchResults] = useState([])
    const { query } = useParams();
    let search = "cars"
    
    useEffect(() => { getSearchResults();
        }, [])
        
    const getSearchResults = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&type=video&maxResults=5&part=snippet`
                );
                setSearchResults(response.data)
                console.log(searchResults.items)
                
            } catch (error) {
                console.log(error.message)  
            }
        };
        

    return (
        <div>
            {searchResults.items && searchResults.items.map((video) =>{
                return(
                <li key={video.id.videoId}>
                    <Link to= {`/video/${video.id.videoId}`}>
                        <img src= {video.snippet.thumbnails.default.url}/>
                    
                    </Link> 
                </li>)
            }
            ) }
        </div>
      );
}
 
export default SearchResultsPage;