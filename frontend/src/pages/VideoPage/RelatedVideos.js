import axios from "axios";
import React, { useState, useEffect } from 'react';
import { KEY } from "../../localKey";
import { useNavigate, Link } from "react-router-dom";
import { DATA } from "../../localData"

const RelatedVideos = (props) => {

    const [relatedVideos, setRelatedVideos] = useState([DATA])
    const navigate = useNavigate();


    
    useEffect(() => { 
        getRelatedVideos();
        console.log(props.videoId)
    }, [props.videoId])
    
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

    const getRelatedVideos = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${KEY}&maxResults=5&part=snippet`
                );
                setRelatedVideos(response.data)
                console.log(relatedVideos)
                
            } catch (error) {
                console.log(error.message)
            }
        };
        

    return (
        <div>
        {relatedVideos.items && relatedVideos.items.map((video) =>{
            return(
            <li key={video.id.videoId}>
                 <Link to={`/watch/${video.id.videoId}`} >
                         <img src= {video.snippet.thumbnails.default.url} alt='video thumbnails' 
                        //  onClick= {() => handleClick(video)}
                         />
                        </Link> 
                 <p>{video.snippet.title}</p>
            </li>)
        }
        ) }
    </div>
      );
}
 
export default RelatedVideos;