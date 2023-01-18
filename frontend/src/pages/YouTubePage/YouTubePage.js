import React, { useState } from 'react';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';
import VideoPage from '../VideoPage/VideoPage';
import { Outlet, useParams } from 'react-router-dom';
// import RelatedVideos from '../VideoPage/RelatedVideos';

const YouTubePage = (props) => {
    const {videoId} = useParams();
    return (
        <div>
            {/* <h1>{videoId}</h1> */}

            {/* <RelatedVideos/> */}
            <Outlet videoId={videoId}/>

        </div>
      );
}
 
export default YouTubePage;