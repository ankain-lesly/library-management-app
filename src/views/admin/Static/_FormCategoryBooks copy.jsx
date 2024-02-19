import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useFetchFunc from "../../../assets/Hooks/useFetchFunc";
import { useStateContext } from "../../../contexts/ContextProvider";

const BooksCategory = ({ setLoadForm }) => {
  const [validateError, setValidateError] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { isLoading, response, error, fetchData } = useFetchFunc();
  const { token, setToast } = useStateContext();
  const navigate = useNavigate();

  function handSubmit(e) {
    e.preventDefault();

    const Data = e.target.elements;

    const formData = {
      title: Data.title.value.trim(),
      description: Data.description.value.trim(),

      _acc_token: token,
    };

    if (!formData.title) return setValidateError("Title is required...");

    setValidateError(false);

    fetchData({
      method: "POST",
      url: "/create/category",
      formData,
    });
  }

  React.useEffect(() => {
    if (response && response.success) {
      setToast({
        type: "notification",
        title: "New Category Added",
        text: `Category item created successfully.  👍`,
      });
      setIsLoaded(true);
      setTimeout(() => navigate("/dashboard/categories"), 3000);
    }

    if (error) {
      setValidateError("Error creating category...");
    }
  }, [response, error]);

  return (
    <div className='form-container'>
      <nav className='txt-center'>
        <h3 className='clr-success mb-1'>Create a Book Category</h3>
        <p>Enter Category details below to proceed </p>
      </nav>
      <div className='form-wrapper'>
        <form onSubmit={handSubmit}>
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
            <button className='btn btn-s' onClick={() => setLoadForm(null)}>
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

export default BooksCategory;
