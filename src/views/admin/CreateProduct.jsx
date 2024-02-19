import React from "react";
import CustomSelect from "../Custom/CustomSelect";
import HandleFormSubmit from "./Static/HandleFormSubmit";

const CreateProduct = () => {
  const [loadForm, setLoadForm] = React.useState("");
  const [validateError, setValidateError] = React.useState(false);

  const [isloaded, setIsLoaded] = React.useState(false);

  const handleSelected = (data) => {
    if (data.title.includes("--") || data.title === "")
      return setValidateError(true);
    else setValidateError(false);

    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
      setLoadForm(data);
    }, 1000);
  };

  return (
    <>
      {loadForm && (
        <HandleFormSubmit loadForm={loadForm} setLoadForm={setLoadForm} />
      )}

      {!loadForm && (
        <div className='form-container'>
          <nav className='txt-center'>
            <h3 className='clr-success mb-1'>Create a Product</h3>
            <p>
              To create a Product, select a Product Type below to proceed to
              product page
            </p>
          </nav>

          <div className='form-wrapper'>
            {validateError && (
              <div className='form-errors'>
                <span>Please select a valid product</span>
              </div>
            )}

            <div className='select_category_form'>
              <CustomSelect
                styleMe='input-rounded flex-1'
                name='category'
                data={[
                  { optionID: 1, title: "Books" },
                  { optionID: 3, title: "-----" },
                  { optionID: 4, title: "----" },
                  { optionID: 5, title: "---" },
                  { optionID: 6, title: "--" },
                ]}
                handleSelected={handleSelected}
                isloaded={isloaded}
              />
            </div>
          </div>

          <div className='provide-spae' style={{ marginBottom: "100px" }}></div>
        </div>
      )}
    </>
  );
};

export default CreateProduct;
