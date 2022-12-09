import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="img-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="paragraf">
          Commodo ad sint amet commodo Lorem elit. Aute tempor ullamco esse
          labore et nisi ullamco in laborum duis ullamco. Ipsum voluptate
          deserunt quis magna reprehenderit tempor exercitation aliquip. Minim
          sit tempor exercitation eiusmod nostrud do non. Magna laborum
          consequat esse velit sunt laboris proident commodo incididunt deserunt
          dolor laborum elit. Deserunt est Lorem ipsum et duis ea duis est
          adipisicing minim exercitation in nostrud excepteur.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
