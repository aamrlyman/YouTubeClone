import React, { useState, useEffect } from 'react';

const SeachBar = (props) => {
    return (
        <div>
            <label>Search For Videos: </label>
            <input type="text">
            </input>
            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      );
}
 
export default SeachBar;