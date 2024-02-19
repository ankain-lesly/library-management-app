// Validate expressions for user inputs
const valueExpressions = {
  phone: /^[+]?\d{9,13}$/,
  // username: /^[a-zA-Z][a-zA-Z0-9_]{0, 30}$/i,
  username: /^[a-z\d][a-z_\d]{0,20}$/i,

  password: /^[a-z\d]{5,10}$/,
  email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
};
const inputRules = {
  usernameMinLength: 5,
  passwordMinLength: 5,
};
//Validation roles
const validationOptions = [
  {
    attribute: "username",
    isValid: (input) =>
      input.value.trim().length >= parseInt(inputRules.usernameMinLength, 10),
    errorMessage: (input) => ({
      name: [input.name],
      error: `${input.placeholder} should be at least ${inputRules.usernameMinLength} characters!`,
    }),
  },
  {
    attribute: "username",
    isValid: (input) => valueExpressions["username"].test(input.value.trim()),
    errorMessage: (input) => ({
      name: [input.name],
      error: `${input.placeholder} is not valid!`,
    }),
  },
  {
    attribute: "email",
    isValid: (input) =>
      valueExpressions["email"].test(input.value.trim().toLowerCase()),
    errorMessage: (input) => ({
      name: [input.name],
      error: `${input.placeholder} is not valid!`,
    }),
  },
  {
    attribute: "phone",
    isValid: (input) => valueExpressions["phone"].test(input.value.trim()),
    errorMessage: (input) => ({
      name: [input.name],
      error: `${input.placeholder} is not valid! min 9 char..`,
    }),
  },
  {
    attribute: "password",
    isValid: (input) =>
      input.value.trim().length >= parseInt(inputRules.passwordMinLength, 10),
    errorMessage: (input) => ({
      name: [input.name],
      error: `${input.placeholder} must be atleat ${inputRules.passwordMinLength} characters`,
    }),
  },
  {
    attribute: "confirm_password",
    isValid: (input) => {
      let passwordInput = document.querySelector("[name='password']");
      return passwordInput && passwordInput.value.trim() === input.value.trim();
    },
    errorMessage: (input) => ({
      name: [input.name],
      error: `Passwords must be the same!`,
    }),
  },
  {
    attribute: "username, email, phone, password, confirm_password",
    isValid: (input) => input.value.trim() !== "",
    errorMessage: (input) => ({
      name: [input.name],
      error: `${input.placeholder} is required!`,
    }),
  },
];

export default validationOptions;
