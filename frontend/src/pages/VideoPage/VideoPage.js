import { useParams, useLocation } from "react-router-dom";
import { KEY } from '../../localKey';
import RelatedVideos from "./RelatedVideos";
import CreateComment from "../../components/Comments/CreateComment";
import DisplayComments from "../../components/Comments/DisplayComments";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const { state } = useLocation();
  const { user } = useContext(AuthContext);
  console.log(user);
    return (
        <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"></iframe>
        {/* <Outlet></Outlet> */}
        <h3>{state.title}</h3>
        <p>{state.description}</p>
        {user ? (<CreateComment videoId={videoId}/>): <p>Must be logged in to comment</p>}
        <DisplayComments/>
        <div>
        <RelatedVideos videoId={videoId}/>
        </div>
        </div>
        );
}
 
export default VideoPage;

// https://www.googleapis.com/youtube/v3/videos?key=&part=snippet&id=${videoId}