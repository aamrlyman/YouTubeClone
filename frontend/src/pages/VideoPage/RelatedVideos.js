import axios from "axios";
import React, { useState, useEffect } from 'react';
import { KEY } from "../../localKey";
import { useNavigate, Link } from "react-router-dom";
import { DATA } from "../../localData"
import VidMapper from "../../components/VidMapper";

const RelatedVideos = (props) => {

    const [searchResults, setSearchResults] = useState([])

    
    useEffect(() => { 
        getRelatedVideos();
        console.log(props.videoId)
    }, [props.videoId])
    

    const getRelatedVideos = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${KEY}&maxResults=5&part=snippet`
                );
                setSearchResults(response.data)
                // console.log(relatedVideos)
                
            } catch (error) {
                console.log(error.message)
            }
        }; 

    return (
        <div>
        <VidMapper searchResults={searchResults}/>
    </div>
      );
}
 
export default RelatedVideos;