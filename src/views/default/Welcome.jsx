import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className='welcome_hero'>
      <div className='container-x flex txt-center'>
        <div className='content'>
          <h1 className='clr-gradient'>Welcome</h1>
          <h2>
            We <span className='clr-success'>have</span>{" "}
            <span className='clr-danger'>Great</span>{" "}
            <span className='clr-warning'>Content</span>
          </h2>
          <h3 className='clr-danger'>4 U</h3>
          <div className='links mt-2'>
            <Link className='btn btn-s' to='/register/signup'>
              Sign up
            </Link>
            <Link className='btn btn-p ml-1 mr-1' to='/'>
              Get Started
            </Link>
            <Link className='btn btn-s' to='/about'>
              Learn More
            </Link>
            <div className='hr-line mt-2'>---</div>
          </div>
        </div>
      </div>
    </section>
  );
}
