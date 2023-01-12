import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import useCustomForm from '../../hooks/useCustomForm';
// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext";

const CreateComment = (props) => {
  // const { user } = useContext(AuthContext);
  const [user, token] = useAuth();
  const defaultValues = {
    video_id: props.videoId,
    text: "",
    user_id: user.id
  }
  const handlePost = async (defaultData) => {
    try {
      let postData = {
        video_id: defaultData.video_id,
        text: defaultData.text,
        user_id: defaultData.user_id
  
      }  
      let response = await axios.post('http://127.0.0.1:8000/api/comments/loggedIn/', postData, {
        headers: {
          authorization: "Bearer " + token, 
        }})
        console.log(response);
        reset();
        props.getCommentsById(props.setVideoComments);
      } catch (error) {
        console.log(error.message);
      }
    }
  
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    handlePost,
    // props.getCommentsById
  )




return (
        <form onSubmit={handleSubmit}>
            <label>Create Comment:</label>
            <input name="text" type= 'text' value={formData.text} onChange={handleInputChange}  />
            <button type="submit">Post</button>
        </form>
      );
}
 
export default CreateComment;

//      {
//   "video_id": "h8NMF6PO0W0",
//   "text": "This is a really really funny video!",
//   "user_id": 5
// }