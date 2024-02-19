import React from "react";
import { Link } from "react-router-dom";
import { RiEdit2Line, RiDeleteBin6Fill } from "react-icons/ri";

const Categories = () => {
  return (
    <div>
      <div className='header flex between mb-2'>
        <h2>My Categories</h2>
        <Link to='/dashboard/create/category' className='btn btn-s'>
          Create New
        </Link>
      </div>
      <div className='table-container'>
        <table border='2'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Make way</td>
              <td>Ben swap</td>
              <td>Feb 6</td>
              <td>
                <div className='txt-center flex'>
                  <button className='btn padd' title='Delete Item'>
                    <RiDeleteBin6Fill fontSize={20} />
                  </button>
                  <Link to='#' className='btn padd' title='Edit Category'>
                    <RiEdit2Line fontSize={20} />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
