import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DATA } from '../../localData';
import { KEY } from '../../localKey';
import { useNavigate, Link, useParams, } from 'react-router-dom';

const DefaultSearchResults = (props) => {
    const { query } = useParams();
    const [searchResults, setSearchResults] = useState(DATA)
    const navigate = useNavigate();
    let search = "cars"

    // function onClickHandler(searchResults){
    //     useNavigate(`/video/${video.id.videoId}`)
    // }
    
    useEffect(() => { 
        // getSearchResults();
    }, [])
    
    const handleClick = (video) => {
        navigate(`/watch/${video.id.videoId}`, {
            state: {
                videoId: video.id.videoId, 
                title: video.snippet.title,
                description: video.snippet.description
            }
        }
        )
    }
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
        <div>
            {searchResults.items && searchResults.items.map((video) =>{
                return(
                <li key={video.id.videoId}>
                        <img src= {video.snippet.thumbnails.default.url} alt='video thumbnails' onClick= {() => handleClick(video)}/>
                     <p>{video.snippet.title}</p>
                </li>)
            }
            ) }
            {/* <VideoPage/> */}
        </div>
      );
}
 
export default DefaultSearchResults;