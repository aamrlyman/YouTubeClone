import { useParams } from "react-router-dom";
import { KEY } from '../../localKey';
import { Outlet } from 'react-router-dom';


const VideoPage = (props) => {
  const { videoId } = useParams();
    return (
        <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"></iframe>
        {/* <Outlet></Outlet> */}
        </div>
        );
}
 
export default VideoPage;

// https://www.googleapis.com/youtube/v3/videos?key=&part=snippet&id=${videoId}