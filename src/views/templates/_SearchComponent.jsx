import React from "react";
import {
  RiCloseLine,
  RiSearchLine,
  RiArrowDropLeftLine,
  RiPantoneLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../assets/css/global.css";

const SearchItem = ({ setIsSearch }) => {
  const inputReff = React.useRef();

  React.useEffect(() => {
    inputReff.current.focus();
  }, []);
  return (
    <div className='search__component'>
      <div className='search_overflow' onClick={() => setIsSearch(false)}></div>
      <div className='search_container'>
        <div className='search_nav'>
          <div className='search_bar flex gap-1'>
            <label htmlFor='search_input' className='flex gap-1'>
              <RiSearchLine fontSize={20} className='icon' />
              <h5>Search a topic</h5>
            </label>

            <input
              ref={inputReff}
              autoComplete='false'
              id='search_input'
              type='search'
              placeholder='Search your journey here...'
              className='flex-1'
            />
            {/* <RiCloseLine /> */}
          </div>
          <div className='search_tags flex'>
            <h5>Revist:</h5>
            <div className='tags-container flex-1'>
              <div className='container'>
                <Link to='#'>Home</Link>
                <Link to='#'>Tech</Link>
                <Link to='#'>Athletics</Link>
                <Link to='#'>Sports</Link>
                <Link to='#'>Artisans</Link>
                <Link to='#'>Home</Link>
                <Link to='#'>Tech</Link>
                <Link to='#'>Athletics</Link>
                <Link to='#'>Sports</Link>
                <Link to='#'>Artisans</Link>
                <Link to='#'>Home</Link>
                <Link to='#'>Tech</Link>
                <Link to='#'>Athletics</Link>
                <Link to='#'>Sports</Link>
                <Link to='#'>Artisans</Link>
                <Link to='#'>Home</Link>
                <Link to='#'>Tech</Link>
                <Link to='#'>Athletics</Link>
                <Link to='#'>Sports</Link>
                <Link to='#'>Artisans</Link>
              </div>
            </div>
          </div>
          <button
            className='btn_close_search flex'
            onClick={() => setIsSearch(false)}
          >
            <RiCloseLine />
            <span>close</span>
          </button>
        </div>

        <div className='search_results'>
          <div className='results_container'>
            <div className='container'>
              <ul className='result_list'>
                <li>
                  <Link to='#' className='link flex gap-2'>
                    <RiPantoneLine fontSize={35} className='icon' />
                    <div className='more-details flex-1'>
                      <h4>Tititle hereer</h4>
                      <p>some description</p>
                    </div>
                    <RiArrowDropLeftLine fontSize={25} className='icon' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
