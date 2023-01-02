import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import {useParams} from "react-router-dom"
import { DATA } from '../../localData';
import { KEY } from '../../localKey';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import VideoPage from '../VideoPage/VideoPage';

const SearchResultsPage = (props) => {
    const { query } = useParams();
    const [searchResults, setSearchResults] = useState(DATA)
    let search = "cars"

    // function onClickHandler(searchResults){
    //     useNavigate(`/video/${video.id.videoId}`)
    // }
    
    // useEffect(() => { 
    //     getSearchResults();
    // }, [])
    
    const getSearchResults = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&type=video&maxResults=5&part=snippet`
                );
                console.log(searchResults)
                setSearchResults(response.data)
                
            } catch (error) {
                console.log(error.message)
            }
        };
        

    return (
        <div>
            {searchResults.items && searchResults.items.map((video) =>{
                return(
                <li key={video.id.videoId}>
                    <Link to= {`/watch/${video.id.videoId}`}>
                        <img src= {video.snippet.thumbnails.default.url} alt='video thumbnails' />
                    
                    </Link>
                     {/* <Outlet></Outlet> */}
                     <p>{video.snippet.title}</p>
                </li>)
            }
            ) }
            {/* <VideoPage/> */}
        </div>
      );
}
 
export default SearchResultsPage;