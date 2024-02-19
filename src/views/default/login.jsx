import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInputGroup } from "./components/FormInputGroup";
import { RiMailLine, RiLockLine, RiArrowRightLine } from "react-icons/ri";

import validationOptions from "../../assets/Hooks/validationOptions";
import useFetchFunc from "../../assets/Hooks/useFetchFunc";
import { useStateContext } from "../../contexts/ContextProvider";

const Login = () => {
  const { setToast, setToken, setUser } = useStateContext();
  const [isLogin, setIsLogin] = React.useState(false);
  const { response, isLoading, error, fetchData } = useFetchFunc();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = React.useState({
    username: null,
    password: null,
  });

  // Validate input
  const validateInput = (input) => {
    if (!input.name) return false;
    let validateError = false;
    for (const option of validationOptions) {
      //START
      if (option.attribute.includes(input.name) && !option.isValid(input)) {
        let errorObject = option.errorMessage(input);

        setFormErrors((prev) => ({
          ...prev,
          [errorObject.name]: errorObject.error,
        }));

        validateError = true;
      }

      if (!validateError) {
        setFormErrors((prev) => ({
          ...prev,
          [input.name]: null,
        }));
      }
    }
    //END

    return validateError;
  };

  // Submit Form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let validateStatus = "";
    const singupData = Array.from(e.target.elements);

    const formData = {}; //new FormData(e.target);
    singupData.forEach((element) => {
      validateStatus += validateInput(element);
      if (element.name) return (formData[element.name] = element.value);
    });

    if (validateStatus.includes(true)) return;
    //Submitting data
    fetchData({
      method: "POST",
      url: "/user/login",
      formData,
    });
    // const values = [...formData.entries()];
  };

  React.useEffect(() => {
    if (error && error.status_code === 422) {
      setFormErrors((prev) => (error.errors ? error.errors : prev));
    } else if (response && response.login_data) {
      const { login_data } = response;

      setUser({
        username: login_data.username,
        email: login_data.email,
        token: login_data.token,
        status: login_data.status,
      });
      setToken(login_data.token);
      setToast({
        type: "success",
        title: "Login Successful",
        text: `Hi ${login_data.username}, welcome back... 👋`,
      });
      setIsLogin(true);
      setTimeout(() => navigate("/"), 3500);
    } else if (error === undefined) {
      setToast({
        type: "notification",
        title: "Ooops Error",
        text: `Please verify your connections and try again 😪`,
      });
    }
  }, [error, response]);

  return (
    <div className='reg-form-data'>
      <div className='form-head txt-center mb-1'>
        <h2 className='mb-1 clr-success'>Welcome Back</h2>
        {/* <h2 className='mb-1'>Create an account</h2> */}
        <p>Let continue our journey</p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className='container'>
          <FormInputGroup
            validateInput={validateInput}
            attr={{ name: "username", type: "text", placeholder: "Username" }}
            errorMessage={formErrors.username}
            icon={<RiMailLine />}
          />
          <FormInputGroup
            validateInput={validateInput}
            attr={{
              name: "password",
              type: "password",
              placeholder: "Password",
            }}
            errorMessage={formErrors.password}
            icon={<RiLockLine />}
          />
        </div>

        <div className='footer txt-center'>
          {/* <button className='btn btn-s' name="signup">Sign Up Now</button> */}
          <button
            className='btn btn-s mt-2 mb-2 form_btn'
            type={isLoading || isLogin ? "button" : "submit"}
          >
            <span className='flex'>
              {isLoading ? (
                <>
                  <span className='loader inline-text mr-1'></span>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span className='mr-1'> Login </span>
                  <RiArrowRightLine fontSize={20} />
                </>
              )}
            </span>
          </button>
          <p>
            Don't have an account
            <Link to='/register/signup' className='btn clr-danger ml-2'>
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
