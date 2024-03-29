import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const colorArray = ["#f6bd60", "#f7ede2", "#f5cac3", "#84a59d"];

const Panel2 = styled.li`
width: 500px;
padding: 1rem;
display: grid;
place-content: center;
place-items: center;
box-shadow: 2px 3px 8px -2px rgba(0, 0, 0, 0.300);
margin: 1rem;
border-radius: 7px;
border-rad
`;

const VidMapper = (props) => {
  return (
    <div className="VertVidMapper">
      <h1 className="VertVidMapperh1">Related videos</h1>
      {props.searchResults.items &&
        props.searchResults.items.map((video) => {
          return (
            <Panel2
              key={"#" + video.id.videoId}
              style={{
                backgroundColor: `${
                  colorArray[Math.floor(Math.random() * colorArray.length)]
                }`,
              }}
            >
              <Link to={`/watch/${video.id.videoId}`}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt="video thumbnails"
                  //  height={video.snippet.thumbnails.high.height}
                  //  width={video.snippet.thumbnails.high.width}
                />
              </Link>
              <p>{video.snippet.title}</p>
            </Panel2>
          );
        })}
    </div>
  );
};

export default VidMapper;
