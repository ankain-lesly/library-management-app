import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import axios from "axios";
import LoaderSpinner from "./components/LoaderSpinner";

const ViewBook = () => {
  const [postData, setPostData] = React.useState(null);
  const { title } = useParams();

  React.useEffect(() => {
    if (!title) {
      return <Navigate to='/' />;
    }
    axios
      .get(`http://localhost:5050/api/products/books/${deSlog(title)}`)
      .then(({ data }) => {
        // successful request
        if (data.data) {
          setPostData(data.data);
        }
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title]);

  function deSlog(string) {
    // .toLowerCase()
    // return string.replace(/ /g, "-").replace(/[^\w-]+/g, "");
    return string.split("_").join(" ");
  }
  return (
    <>
      <div className='single_post_container '>
        <div className='container-x'>
          {!postData && <LoaderSpinner />}
          {postData && (
            <>
              <section className='single__container section'>
                <div className='image'>
                  <h1>image</h1>
                </div>
                <div className='content'>
                  <h2>{postData.name}</h2>
                  <h4>{postData.author}</h4>
                  <p>{postData.description}</p>
                  <Link to={`/category/${postData.category}`} className=''>
                    <small className='btn btn-p clr-white mt-2'>
                      {postData.category}
                    </small>
                  </Link>
                </div>
              </section>
              <div className='section_actions pt-2 pb-2'>
                <Link to='/' className='clr-danger'>
                  -- Back
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewBook;
