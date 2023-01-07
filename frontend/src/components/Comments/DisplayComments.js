import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayComments = (props) => {
    
    const [videoComments, setVideoComments] = useState([]);

    useEffect(()=> {
    const getCommentsById = async () => {
        try{
            let response = await axios.get(
                `http://127.0.0.1:8000/api/comments?video_id=${props.videoId}`, 
                // "http://127.0.0.1:8000/api/comments?video_id=h8NMF6PO0W0 "
            );
            setVideoComments(response.data)
            console.log(videoComments)
        } catch (error) {
            console.log(error.message);
        }
    }
    getCommentsById();
}, []);

    return (             
        <div>
            <p>Rick: Comment</p>
        </div>
    );
}
 
export default DisplayComments;