import React from "react";
import { Link } from "react-router-dom";
// import thumbnail from "../../assets/images/user-thumbnail.png";
import { useStateContext } from "../../contexts/ContextProvider";
import useAuth from "../useAuth";

const Dashboard = () => {
  const { user } = useStateContext();
  useAuth();
  return (
    <div className='dashboard'>
      <section className='feeds-container'>
        <div className='feed user-details'>
          <div className='box flex txt-center'>
            <div className='group'>
              {/* <img src={thumbnail} alt='' /> */}
              <img
                src='http://localhost:5050/assets/DESIGN-INSPIRATION.jpg'
                alt={`Profile ${user.username}`}
              />
              <h3>{user.username}</h3>
              <p>{user.email}</p>
              <Link to='#' className='btn btn-s mt-1'>
                Pofile
              </Link>
            </div>
          </div>
        </div>
        <div className='feed books-feed'>
          <div className='box flex'>
            <div className='group'>
              <div className='circle flex'>
                <h3>70%</h3>
              </div>
              <div className='text txt-center'>
                <p>Books bring live</p>
                <Link to='/dashboard/create/book' className='btn btn-p mt-1'>
                  create a book
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='feed'>
          <div className='box'> c</div>
        </div>
        <div className='feed'>
          <div className='box'> c</div>
        </div>
        <div className='feed'>
          <div className='box'> c</div>
        </div>
        <div className='feed'>
          <div className='box'> d</div>
        </div>
        <div className='feed'>
          <div className='box'> e</div>
        </div>
        <div className='feed'>
          <div className='box'> f</div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
