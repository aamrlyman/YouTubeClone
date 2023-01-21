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
import { localVideo } from "./localVideo";

// import { CommentData } from "../../components/Comments/LocalCommentData";

const VideoPage = (props) => {
  const [video, setVideo] = useState(null);
  const [videoComments, setVideoComments] = useState([]);
  const { videoId } = useParams();
  const { user } = useContext(AuthContext);
  // const { state } = useLocation();

  const getVideoById = async () => {
    try {
      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?key=${KEY}&type=video&part=snippet&id=${videoId}`
        )
        .then((response) => {
          setVideo(response.data.items[0]);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getVideoById().then((response) => {
      // console.log(video);
    });
  }, [videoId]);

  const getCommentsById = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/?video_id=${videoId}`
      );
      setVideoComments(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(videoComments);
  // console.log(user);

  return (
    <div className="videoPage">
      <div className="iFrame">
      {video ? <h1>{video.snippet.title}</h1> : <h1></h1>}
      <iframe
        key={videoId + "iframe"}
        id="ytplayer"
        type="text/html"
        width="640"
        height="390"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      {video ? <p className="description">{video.snippet.description}</p> : <p></p>}
      <div className="comments">
      {user ? (
        <CreateComment
          key={videoId}
          videoId={videoId}
          user={user}
          getCommentsById={getCommentsById}
          videoComments={videoComments}
          setVideoComments={setVideoComments}
        />
      ) : (
        <h2>Must be logged in to comment</h2>
      )}
      <DisplayComments
        key={videoId + "DC"}
        videoId={videoId}
        getCommentsById={getCommentsById}
        videoComments={videoComments}
        setVideoComments={setVideoComments}
      />
      </div>
      </div>
      <div>
        <RelatedVideos videoId={videoId} key={videoId + "rv"}/>
      </div> 
    </div>
  );
};

export default VideoPage;

// https://www.googleapis.com/youtube/v3/videos?key=&part=snippet&id=${videoId}
