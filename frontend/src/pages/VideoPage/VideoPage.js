import { useParams, useLocation } from "react-router-dom";
import { KEY } from "../../localKey";
import RelatedVideos from "./RelatedVideos";
import CreateComment from "../../components/Comments/CreateComment";
import DisplayComments from "../../components/Comments/DisplayComments";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CommentData } from "../../components/Comments/LocalCommentData";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const { state } = useLocation();
  const { user } = useContext(AuthContext);
  const [videoComments, setVideoComments] = useState();
 
  const getCommentsById = async (callback) => {
    try {
      let response = await axios.get(
        // "http://127.0.0.1:8000/api/comments/all/"
        `http://127.0.0.1:8000/api/comments/?video_id=${state.videoId}`
        // `http://127.0.0.1:8000/api/comments?video_id=${videoId}/`
        // "http://127.0.0.1:8000/api/comments?video_id=5uhqAntS2-o"
      );
      callback(response.data)
      console.log(videoComments)
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(user);
  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      {/* <Outlet></Outlet> */}
      <h3>{state.title}</h3>
      <p>{state.description}</p>
      {user ? (
        <CreateComment
          videoId={videoId}
          user={user}
          getCommentsById={getCommentsById}
          videoComments={videoComments}
          setVideoComments={setVideoComments}
        />
      ) : (
        <p>Must be logged in to comment</p>
      )}
      <DisplayComments
        videoId={videoId}
        getCommentsById={getCommentsById}
        videoComments={videoComments}
        setVideoComments={setVideoComments}
      />
      <div>
        <RelatedVideos videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;

// https://www.googleapis.com/youtube/v3/videos?key=&part=snippet&id=${videoId}
