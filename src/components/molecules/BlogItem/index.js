import React from "react";
import { useNavigate } from "react-router-dom";
import { htmlBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";

const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="img-thumb" src={htmlBg} alt="post" />
      <div className="content-detail">
        <p className="title">Tutor Coding</p>
        <p className="author">Author - TomSaymon.</p>
        <p className="paragraf">
          Commodo ad sint amet commodo Lorem elit. Aute tempor ullamco esse
          labore et nisi ullamco in laborum duis ullamco. Ipsum voluptate
          deserunt quis magna reprehenderit tempor exercitation aliquip. Minim
          sit tempor exercitation eiusmod nostrud do non.
        </p>
        <Gap height={20} />
        <Button title="View Detail" onClick={() => navigate("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
