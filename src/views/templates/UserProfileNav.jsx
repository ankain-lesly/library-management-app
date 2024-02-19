import { RiArrowDownSLine, RiBellLine, Ri4KLine } from "react-icons/ri";
import Thumbnail from "../../assets/images/user-thumbnail.png";
import "../../assets/css/global.css";
import { useStateContext } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";

export default function UserProfileNav({ name, thumbnail }) {
  const { setToast } = useStateContext();

  if (!thumbnail) thumbnail = Thumbnail;
  return (
    <div className='flex'>
      <div className='user_profile flex'>
        <h4>{name}</h4>
        <div className='thumbnail'>
          <img
            className='ml-x profile-icon-x'
            src={thumbnail}
            alt='user profile'
          />
        </div>
        <span className='padd'>
          <RiArrowDownSLine fontSize={24} />
        </span>
        <nav className='drop_menu'>
          <ul className='menu_container'>
            <li>
              <Link to='/dashboard' className='link flex'>
                <Ri4KLine fontSize={20} />
                <span className='ml-2'>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to='#' className='link flex'>
                <Ri4KLine fontSize={20} />
                <span className='ml-2'>Notifications</span>
                <span className='btn btn-s padd'></span>
              </Link>
            </li>
            <li>
              <Link to='/' className='link flex'>
                <Ri4KLine fontSize={20} />
                <span className='ml-2'>Home page</span>
              </Link>
            </li>
            <li>
              <Link to='/user/logout' className='link flex'>
                <Ri4KLine fontSize={20} />
                <span className='ml-2'>Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className='padd'
        onClick={() =>
          setToast({
            type: "warning",
            title: "Toast Title",
            text: "lorem ispum dolor nima l dfneihte heibb d",
          })
        }
      >
        <RiBellLine fontSize={24} />
      </button>
    </div>
  );
}

UserProfileNav.defaultProps = {
  user: {
    name: "name",
    thumbnail: Thumbnail,
  },
};
