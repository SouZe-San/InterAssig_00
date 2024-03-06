/* eslint-disable react/prop-types */
// import React from "react";
import userIcon from "../../../assets/Icon/user.svg";
const PostItem = ({ post }) => {
  return (
    <div className="card ">
      <div className="postAccount">
        <div className="user-icon">
          <img src={userIcon} alt="U" />
        </div>
        <span>{post.userName}</span>
      </div>
      <div className="card-body flex flex-col justify-end">
        <h1 className="card-title ">{post.title}</h1>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};

export default PostItem;
