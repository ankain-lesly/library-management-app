import React from "react";
import { RiEyeCloseLine, RiEyeLine, RiCloseCircleFill } from "react-icons/ri";

export const FormInputGroup = ({ attr, icon, errorMessage, validateInput }) => {
  const [inputType, setType] = React.useState(attr.type);
  const messageRef = React.useRef();

  React.useEffect(() => {
    if (!messageRef.current) return;
    if (errorMessage) {
      messageRef.current.classList.add("shake_anim");
      setTimeout(() => messageRef.current.classList.remove("shake_anim"), 500);
    } else {
      messageRef.current.classList.remove("shake_anim");
    }
  }, [errorMessage]);

  return (
    <div className={`form-group  flex`}>
      <label htmlFor={attr.name} className='icon'>
        {icon}
      </label>
      <div className='input-group flex-1'>
        <input
          {...attr}
          type={inputType}
          id={attr.name}
          autoComplete='on'
          onBlur={(e) => validateInput(e.target)}
        />
        <label htmlFor={attr.name} className='input-label'>
          {attr.placeholder}
        </label>
        <div className={`input-line ${errorMessage && "error"} `}></div>
        <div className='input-line motion'></div>
        {errorMessage && (
          <label
            htmlFor={attr.name}
            ref={messageRef}
            className={`clr-danger status-msg`}
          >
            {errorMessage}
          </label>
        )}
      </div>
      <label htmlFor={attr.name} className='status-icon'>
        {attr.type === "password" ? (
          <span
            onClick={() =>
              setType(inputType === "password" ? "text" : "password")
            }
          >
            {inputType === "password" ? (
              <RiEyeLine fontSize={20} />
            ) : (
              <RiEyeCloseLine fontSize={20} />
            )}
          </span>
        ) : (
          errorMessage && (
            <RiCloseCircleFill className='clr-danger' fontSize={20} />
          )
        )}
      </label>
    </div>
  );
};
