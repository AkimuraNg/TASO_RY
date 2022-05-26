import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavBar/Navbar";
import BlogCard from "./BlogComponents/BlogCard";
import blogData from "./BlogComponents/data";

const Blogs = () => {
  const { pageNumber } = useParams();
  const numberOfBlogsPerPage = 8;
  const start = (parseInt(pageNumber) - 1) * parseInt(numberOfBlogsPerPage);
  const blogsForThisPage = blogData.slice(start, start + numberOfBlogsPerPage);
  const numberOfPages = parseInt(blogData.length / numberOfBlogsPerPage) + 1;
  const pages = Array.apply(null, { length: numberOfPages }).map(
    Number.call,
    Number
  );
  let previous = pageNumber - 1;
  if (previous === 0) {
    previous = 1;
  }
  let next = parseInt(pageNumber) + 1;
  if (next > pages.length) {
    next = pages.length;
  }
  return (
    <div className="gimme-space" style={{ marginTop: 100, textAlign: 'center' }}>
      <header>
        <Navbar />
      </header>
      <main >
        <div className="BlogWrapper">
          <h1 style={{color:'rgba(118, 0, 85, 0.65)'}}>BLOGIT & UUTISET</h1>
          <div className="container">
            <div className="row">
              <div className="contents d-flex flex-wrap justify-content-center">
                {blogsForThisPage.map((blog) => (
                  <BlogCard key={blog.title} blog={blog} />
                ))}
              </div>

            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ marginBottom: 20 }}>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href={`/Blogs/${previous}`}>
                  Previous
                </a>
              </li>

              {pages.map((page) => (
                <li className="page-item" key={page}>
                  <a className="page-link" href={`/Blogs/${page + 1}`}>
                    {page + 1}
                  </a>
                </li>
              ))}

              <li className="page-item">
                <a className="page-link" href={`/Blogs/${next}`}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Blogs;
