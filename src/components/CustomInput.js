import React from "react";
import { Form } from "react-bootstrap";

function CustomInput({placeholder,type, required,onChange,name}) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type={type} 
        required={required} placeholder={placeholder}
        onChange={onChange} name={name}/>
      </Form.Group>
    </Form>
  );
}

export default CustomInput;