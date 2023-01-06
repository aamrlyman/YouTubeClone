import React, { useState } from 'react';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';
import VideoPage from '../VideoPage/VideoPage';
import { Outlet } from 'react-router-dom';
// import RelatedVideos from '../VideoPage/RelatedVideos';

const YouTubePage = (props) => {
    return (
        <div>
            <h1>YouTubePage</h1>
            {/* <RelatedVideos/> */}
            <Outlet/>

        </div>
      );
}
 
export default YouTubePage;