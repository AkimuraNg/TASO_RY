import React from "react";
import './BlogCard.css'

const BlogCard = ({ blog }) => {
  const { title, detail, image } = blog;
  return (
    <div className="width-18 m-3">
      <div className="card">
        <div className="card-body">
          <img src={image} alt="blog images" />
          <h5 className="card-title" style={{ fontSize: 20, fontFamily: 'Mali', marginTop: 5 }}>{title}</h5>
          <p className="card-text" style={{ fontSize: 16, fontFamily: 'Mali' }}>{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
