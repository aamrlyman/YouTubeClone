import { useParams, useLocation } from "react-router-dom";
import { KEY } from '../../localKey';



const VideoPage = (props) => {
  const { videoId } = useParams();
  const { state } = useLocation();
  console.log(state);
    return (
        <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"></iframe>
        {/* <Outlet></Outlet> */}
        <h3>{state.title}</h3>
        <p>{state.description}</p>
        </div>
        );
}
 
export default VideoPage;

// https://www.googleapis.com/youtube/v3/videos?key=&part=snippet&id=${videoId}