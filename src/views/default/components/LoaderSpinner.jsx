import React from "react";
const LoaderSpinner = () => {
  return (
    <div className='main_loader_container'>
      <div className='container flex'>
        <div className='loader mr-1 ml-1'></div>
        <small className='clr-success'>loading...</small>
      </div>
    </div>
  );
};

export default LoaderSpinner;
