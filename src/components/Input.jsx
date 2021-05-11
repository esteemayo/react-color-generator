import React from "react";

const Input = ({ error, ...rest }) => {
  return <input {...rest} className={`${error ? "error" : null}`} />;
};

export default Input;
