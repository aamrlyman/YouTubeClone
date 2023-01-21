import React, { useState, useEffect } from "react";
import axios from "axios";
import { CommentData } from "./LocalCommentData";

const DisplayComments = (props) => {
  //   const [videoComments, setVideoComments] = useState(CommentData);

  useEffect(() => {
    props.getCommentsById();
  }, [props.videoId]);

  return (
    <div className="displayComment">
      {props.videoComments &&
        props.videoComments.slice().reverse().map((comment) => {
          return (
            <p key={comment.id}>
              <span className="userName">{comment.user.username.toUpperCase()}</span>: {comment.text}
            </p>
          );
        })}
    </div>
  );
};

export default DisplayComments;
