import React, { useState } from 'react';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';
import VideoPage from '../VideoPage/VideoPage';


const YouTubePage = (props) => {
    return (
        <div>
            <VideoPage/>
            <SearchResultsPage/>
        </div>
      );
}
 
export default YouTubePage;