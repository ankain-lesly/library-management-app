import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import useFetchFunc from "../../../assets/Hooks/useFetchFunc";
import { useStateContext } from "../../../contexts/ContextProvider";
import CustomSelect from "../../Custom/CustomSelect";

const CreateProductBook = (props) => {
  const [validateError, setValidateError] = React.useState([]);
  const { setLoadForm, handSubmit } = props;

  const [categoryValue, setCategoryValue] = React.useState(null);
  const [isloaded, setIsloaded] = React.useState(true);
  const [categories, setCategories] = React.useState(null);
  const { isLoading, response, error, fetchData } = useFetchFunc();
  const { setToast } = useStateContext();

  React.useEffect(() => {
    fetchData({
      method: "GET",
      url: "/category/books",
    });
  }, []);

  const handleSelected = (e) => {
    console.log(e);
  };
  React.useEffect(() => {
    if (error || error === undefined) {
      setToast({
        type: "warning",
        title: "Network Error",
        text: `Error Getting resources please try again`,
      });
      return;
    }
    if (response) {
      setCategories(response.data);
      setIsloaded(false);
      return;
    }
  }, [response, error]);

  let errors = [];
  const regex = {
    URL: /^((https|http):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g,
  };

  const validateElement = (name, value) => {
    const exceptions = ["URL"];

    if (name === "URL" && value !== "" && regex["URL"].test(value) !== true)
      return errors.push("Please verify your URL address!");

    if (exceptions.includes(capitalizeWord(name))) return;

    if (value === "") errors.push(`${capitalizeWord(name)} is required!`);

    function capitalizeWord() {
      return `${name[0].toUpperCase()}${name.slice(1)}`;
    }
  };

  function handleValidate(e) {
    e.preventDefault();

    const Data = e.target.elements;

    const formData = {};
    for (const element of Data) {
      if (!element.name) continue;
      formData[element.name] = element.value.trim();
      validateElement(element.name, element.value.trim());
    }

    if (errors && errors.length > 0) return setValidateError(errors);
    else setValidateError(false);
    handSubmit(formData, "/create/product", "/dashboard/products?books");
  }
  return (
    <div className='form-container'>
      <nav className='txt-center'>
        <h3 className='clr-success mb-1'>Create a new Book</h3>
        <p>Enter book details below to proceed</p>
      </nav>
      <div className='form-wrapper'>
        <form onSubmit={handleValidate}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            className='mb-1'
            placeholder='Book title'
          />

          <label htmlFor='author'>Author</label>
          <input
            type='text'
            name='author'
            className='mb-1'
            placeholder='Authors name'
          />

          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            id='description'
            className='mb-1 scroll-bar overflow'
            placeholder='About this book'
          ></textarea>

          <p className='flex between wrap'>
            <label htmlFor='URL'>Description</label>
            <small className='clr-warning ml-1 mb-x'>optional</small>
            <small className='mr-1 mb-x'>could be assistive</small>
          </p>
          <input
            type='text'
            name='URL'
            className='mb-1'
            placeholder='URL: https://www.address-book.com/book...'
          />

          <label htmlFor='category'>Category</label>
          <CustomSelect
            styleMe='input-rounded flex-1'
            name='category'
            data={[
              { optionID: 1, title: "Books_category" },
              { optionID: 3, title: "-----" },
              { optionID: 4, title: "----" },
              { optionID: 5, title: "---" },
              { optionID: 6, title: "--" },
            ]}
            handleSelected={handleSelected}
            isloaded={isloaded}
          />

          {validateError && validateError.length > 0 && (
            <div className='form-errors'>
              <span>
                {validateError.length > 1
                  ? "More than one field is empty"
                  : validateError[0]}
              </span>
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
            <button className='btn btn-p'>
              <span className='flex'>
                <span className='mr-1'> Continue </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductBook;
