import React from "react";
import { useParams, Navigate } from "react-router-dom";
// import axios from "axios";
import BookCard from "./components/BookCard";
import LoaderSpinner from "./components/LoaderSpinner";

const Category = () => {
  const [postData, setPostData] = React.useState(null);
  const { catTitle } = useParams();

  React.useEffect(() => {
    if (!catTitle) {
      return <Navigate to='/' />;
    }
    setPostData(null);
    // axios
    //   .get(`http://localhost:5050/api/products/books/${deSlog(title)}`)
    //   .then(({ data }) => {
    //     // successful request
    //     if (data.data) {
    //       setPostData(data.data);
    //     }
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [catTitle]);

  function deSlog(string) {
    // .toLowerCase()
    // return string.replace(/ /g, "-").replace(/[^\w-]+/g, "");
    return string.split("_").join(" ");
  }
  return (
    <div className='single_post_container section'>
      <div className='container-x'>
        <div className='category_header'>
          <h2>All Book on:</h2>
          <h4 className='clr-success'>{deSlog(catTitle)}</h4>
        </div>
        {!postData && (
          <section className='category__container'>
            <BookCard
              data={{ id: 8, name: "Testing thes feed" }}
              actions={{ reacts: [2, 5], favorites: [8, 6] }}
            />
            <BookCard
              data={{ id: 8, name: "Testing thes feed" }}
              actions={{ reacts: [2, 5], favorites: [8, 6] }}
            />
            <BookCard
              data={{ id: 8, name: "Testing thes feed" }}
              actions={{ reacts: [2, 5], favorites: [8, 6] }}
            />
            <BookCard
              data={{ id: 8, name: "Testing thes feed" }}
              actions={{ reacts: [2, 5], favorites: [8, 6] }}
            />
            <BookCard
              data={{ id: 8, name: "Testing thes feed" }}
              actions={{ reacts: [2, 5], favorites: [8, 6] }}
            />
            <BookCard
              data={{ id: 8, name: "Testing thes feed" }}
              actions={{ reacts: [2, 5], favorites: [8, 6] }}
            />
          </section>
        )}

        {!postData && <LoaderSpinner />}
      </div>
    </div>
  );
};

export default Category;
