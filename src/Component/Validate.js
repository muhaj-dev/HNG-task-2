const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (values.firstName.length < 1) {
      errors.firstName = "Invalid First name";
    } 
  
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (values.lastName.length < 1) {
      errors.lastName = "Invalid Last name";
    }
  
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
      
    if (!values.message) {
        errors.message = "Password is required";
      } else if (values.message.length < 6) {
        errors.message = "Please enter a message";
      } 
    return errors;
  };
  
  export default validate;