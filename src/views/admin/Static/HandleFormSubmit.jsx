import React from "react";
import { useNavigate } from "react-router-dom";
import useFetchFunc from "../../../assets/Hooks/useFetchFunc";
import { useStateContext } from "../../../contexts/ContextProvider";

import CreateProductBook from "./_FormProductBooks";
import CreateCategoryBooks from "./_FormCategoryBooks";

const HandleFormSubmit = ({ setLoadForm, loadForm }) => {
  const [submitHelper, setSubmitHelper] = React.useState();

  const [isLoaded, setIsLoaded] = React.useState(false);
  const { isLoading, response, error, fetchData } = useFetchFunc();
  const { token, setToast } = useStateContext();
  const navigate = useNavigate();

  const objects = {
    setLoadForm,
    handSubmit,
    isLoaded,
    isLoading,
  };

  const CreateForms = {
    Books: <CreateProductBook {...objects} />,
    Books_category: <CreateCategoryBooks {...objects} />,
  };

  function handSubmit(formData, endpoint, redirect) {
    setSubmitHelper(redirect);
    formData["_acc_token"] = token;
    fetchData({
      method: "POST",
      url: endpoint,
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
      setTimeout(() => navigate(submitHelper), 3000);
    }

    if (error) {
      setToast({
        type: "error",
        title: "Connection Error",
        text: `Error creating category item. Please try again.`,
      });
      // setValidateError("Error creating category...");
    }
  }, [response, error]);

  return (
    <>
      {loadForm && CreateForms[loadForm.title]}
      {!loadForm && (
        <div className='form-errors'>
          <span>Error Creating form...</span>
        </div>
      )}
    </>
  );
};

export default HandleFormSubmit;
