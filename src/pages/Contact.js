import React,{useState} from "react";
import validate from "../Component/Validate";
import { useFormik } from "formik";

function Contact() {
    const [inputVal, setInputVal] = useState('')
    const [email, setEmail] = useState('')

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      
    </form>
  );
}

export default Contact;