import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/main-hero-image.png";
import { RiAddCircleLine } from "react-icons/ri";
const MainHero = () => {
  return (
    <section className="hero-main">
      <div className="container-x">
        <div className="content flex between">
          <div className="content-infor">
            <h1>
              Make <span className="clr-success">Books</span> and Pamflets
              <span className="clr-danger"> Readable</span>
            </h1>
            <p className="mb-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
              delectus! Lorem, ipsum.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="content-image">
            <img src={heroImage} alt="Theme of the creative books" />
          </div>
        </div>
        <div className="hero-actions flex txt-center">
          <div className="links mt-2">
            <div className="hr-line mb-2 clr-text-muted">---</div>
            <Link
              className="btn btn-s flex mr-2 ml-2"
              to="/dashboard/create/book">
              <span className="mr-1">Create</span>{" "}
              <RiAddCircleLine fontSize={25} />
            </Link>
            {/* <Link className='btn btn-s' to='/about'>
              Learn More
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
