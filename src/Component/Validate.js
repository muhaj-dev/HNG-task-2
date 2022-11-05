const validate = (values) => {
    const errors = {};
      
    if (!values.message) {
        errors.message = "Password is required";
      } else if (values.message.length < 6) {
        errors.message = "Please enter a message";
      } 
    return errors;
  };
  
  export default validate;