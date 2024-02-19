import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const CreateCategoryBooks = (props) => {
  const [validateError, setValidateError] = React.useState(false);
  const { setLoadForm, handSubmit, isLoaded, isLoading } = props;

  function handleValidate(e) {
    e.preventDefault();
    const Data = e.target.elements;

    const formData = {
      title: Data.title.value.trim(),
      description: Data.description.value.trim(),
    };

    if (!formData.title) return setValidateError("Title is required...");
    else setValidateError(false);
    handSubmit(formData, "/create/category", "/dashboard/categories");
  }

  return (
    <div className='form-container'>
      <nav className='txt-center'>
        <h3 className='clr-success mb-1'>Create a Book Category</h3>
        <p>Enter Category details below to proceed </p>
      </nav>
      <div className='form-wrapper'>
        <form onSubmit={handleValidate}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            className='mb-1'
            placeholder='Category Title'
          />

          <p className='flex between wrap'>
            <label htmlFor='description'>Description</label>
            <small className='clr-warning ml-1 mb-x'>optional</small>
            <small className='mr-1 mb-x'>could be assistive</small>
          </p>
          <textarea
            name='description'
            id='description'
            className='mb-1'
            placeholder='About this category'
          ></textarea>

          {validateError && (
            <div className='form-errors'>
              <span>{validateError}</span>
            </div>
          )}

          <div className='actions flex between mt-2'>
            <button
              type='button'
              className='btn btn-s'
              onClick={() => setLoadForm(null)}
            >
              Back
            </button>
            <button
              className='btn btn-p'
              type={`${isLoading || isLoaded ? "button" : ""}`}
            >
              <span className='flex'>
                <span className='mr-1'> Continue </span>
                {isLoading || isLoaded ? (
                  <span className='loader inline-text'></span>
                ) : (
                  <RiArrowRightLine
                    fontSize={20}
                    style={{ width: "25px", height: "25px" }}
                  />
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryBooks;
