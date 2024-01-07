import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <lable htmlFor={props.input.id}>{props.lable}</lable>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
