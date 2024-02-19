import React from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../useAuth";
import Books from "./Pages/Books";
import Categories from "./Pages/Categories";

const Products = () => {
  const { type } = useParams();
  const products = {
    books: <Books />,
    categories: <Categories />,
  };

  useAuth();
  return (
    <>
      {type && products[type.toLowerCase()]}
      {!type && (
        <div>
          <div className='header flex between mb-2'>
            <h2>My Books</h2>
            <Link href='/dashboard/create/book' className='btn btn-s'>
              Create New
            </Link>
          </div>
          <div className='product-container flex start wrap'>
            <Link to='/dashboard/products/books' className='product-item'>
              <h4>Books</h4>
              <div className='design'></div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
