import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInputGroup } from "./components/FormInputGroup";
import {
  RiUserLine,
  RiMailLine,
  RiLockLine,
  RiPhoneLine,
  RiArrowRightLine,
} from "react-icons/ri";
import validationOptions from "../../assets/Hooks/validationOptions";
import useFetchFunc from "../../assets/Hooks/useFetchFunc";
import { useStateContext } from "../../contexts/ContextProvider";

const Signup = () => {
  const { setUser, setToken, setToast } = useStateContext();
  const { response, isLoading, error, fetchData } = useFetchFunc();
  const [isSignup, setIsSignUp] = React.useState(false);
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = React.useState({
    username: null,
    email: null,
    phone: null,
    password: null,
    confirm_password: null,
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
      url: "/user/signup",
      formData,
    });
    // const values = [...formData.entries()];
  };

  React.useEffect(() => {
    if (error && error.status_code === 422) {
      setFormErrors((prev) => (error.errors ? error.errors : prev));
    }

    if (response && response.user) {
      const { user } = response;

      setUser({
        username: user.username,
        email: user.email,
        token: user.token,
      });
      setToken(user.token);
      setToast({
        type: "success",
        title: "Signup Successful",
        text: `Hi ${user.username}, Your account has been created successfully. 👌`,
      });
      setIsSignUp(true);
      setTimeout(() => navigate("/"), 3500);
    }
  }, [error, response]);

  return (
    <div className='reg-form-data'>
      <div className='form-head txt-center mb-1'>
        <h2 className='mb-1 clr-success'>Sign Up</h2>
        {/* <h2 className='mb-1'>Create an account</h2> */}
        <p>Create and setup your account, start playing cool today</p>
        <p>use response status code return from validation</p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className='container'>
          <FormInputGroup
            validateInput={validateInput}
            attr={{ name: "username", type: "text", placeholder: "Username" }}
            errorMessage={formErrors.username}
            icon={<RiUserLine />}
          />
          <FormInputGroup
            validateInput={validateInput}
            attr={{
              name: "email",
              type: "text",
              placeholder: "Email Address",
            }}
            errorMessage={formErrors.email}
            icon={<RiMailLine />}
          />
          <FormInputGroup
            validateInput={validateInput}
            attr={{ name: "phone", type: "tel", placeholder: "Phone Number" }}
            errorMessage={formErrors.phone}
            icon={<RiPhoneLine />}
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
          <FormInputGroup
            validateInput={validateInput}
            attr={{
              name: "confirm_password",
              type: "password",
              placeholder: "Repeat Password",
            }}
            errorMessage={formErrors.confirm_password}
            icon={<span className='visiblity'>.</span>}
          />
        </div>
        <div className='footer txt-center'>
          {/* <button className='btn btn-s' name="signup">Sign Up Now</button> */}
          <button
            className='btn btn-s mt-2 mb-2 form_btn'
            type={isLoading || isSignup ? "button" : "submit"}
          >
            <span className='flex'>
              {isLoading || isSignup ? (
                <>
                  <span className='loader inline-text mr-1'></span>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span className='mr-1'> Create account</span>
                  <RiArrowRightLine fontSize={20} />
                </>
              )}
            </span>
          </button>
          <p>
            Already have an account
            <Link to='/register/login' className='btn clr-danger ml-2'>
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
