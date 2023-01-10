import React, { useState, useEffect } from "react";
import axios from "axios";
import { CommentData } from "./LocalCommentData";

const DisplayComments = (props) => {
//   const [videoComments, setVideoComments] = useState(CommentData);

  useEffect(() => {
    // props.getCommentsById();
  }, [props.videoId]);

  return (
    <div>
      {props.videoComments &&
        props.videoComments.map((comment) => {
          return (
            <p key={comment.id}>
              {comment.user.username}: {comment.text} 
            </p>
          );
        })}
    </div>
  );
};

export default DisplayComments;
