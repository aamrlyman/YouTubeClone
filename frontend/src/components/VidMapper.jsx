import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const VidMapper = (props) => {
    return (
        <div>
        {props.searchResults.items && props.searchResults.items.map((video) =>{
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
 
export default VidMapper;