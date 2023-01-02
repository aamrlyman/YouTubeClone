import React, { useState } from 'react';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';
import VideoPage from '../VideoPage/VideoPage';
import { Outlet } from 'react-router-dom';

const YouTubePage = (props) => {
    return (
        <div>
            <h1>YouTubePage</h1>
            <Outlet/>
            {/* <SearchResultsPage/> */}
            {/* <VideoPage/> */}

        </div>
      );
}
 
export default YouTubePage;