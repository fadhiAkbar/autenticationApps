import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Gap, Link } from "../../components";
import "./detailBlog.scss";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={LoginBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Velit proident incididunt aute amet aliqua consequat ex magna aliquip
        deserunt. Adipisicing deserunt culpa do nisi Lorem consequat irure. Aute
        elit sunt est pariatur minim Lorem aute. Incididunt ea officia laborum
        Lorem nostrud aliquip mollit officia et tempor est ullamco. Tempor id
        Lorem reprehenderit sint eu et fugiat anim ullamco Lorem anim elit
        laboris veniam. Incididunt fugiat ea excepteur nulla enim laborum quis
        aliqua fugiat. Esse exercitation excepteur incididunt et fugiat anim
        voluptate. Culpa proident eu veniam excepteur culpa deserunt minim. In
        et ut quis tempor officia. Sint sunt consectetur cillum nisi amet sunt.
        Sint nulla et duis incididunt irure dolore cupidatat consectetur. Ad ut
        reprehenderit ex aute incididunt nostrud nostrud veniam commodo enim ut.
        Sunt nostrud adipisicing do pariatur ad duis dolore sunt quis do laborum
        esse esse pariatur. Mollit incididunt ut quis fugiat nisi adipisicing
        cupidatat ut magna minim officia duis tempor proident. Aliquip fugiat
        commodo ut veniam ex consectetur officia. Velit dolor reprehenderit
        fugiat anim adipisicing cillum. Velit ullamco est in laboris pariatur.
        Eiusmod eu Lorem esse occaecat sunt nulla in reprehenderit dolor magna
        ut. Quis occaecat ea irure laboris officia ut aliqua ullamco Lorem
        consectetur do eu consectetur.
      </p>
      <Gap height={20} />
      <Link textLink="Kembali ke Home" onClick={() => navigate("/")} />
      <Gap height={20} />
    </div>
  );
};

export default DetailBlog;
