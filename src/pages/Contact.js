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
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className=" max-w-[720px] w-[95%] mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white  py-8 rounded  text-black w-full">
            <h1 className="text-[36px] font-bold mb-2">Contact Me</h1>
            <p className='text-[20px] mb-5 text-[#475467] '>Hi there, contact me to ask me about anything you have in mind.</p>
            <div className="flex mt-6 flex-col md:flex-row justify-between">  
              <div className="md:w-[48%] w-full">
                <label htmlFor="first__name" >First Name</label>
                <input
                id="first__name"
                type="text"
                className="block border border-grey-light w-full  outline-[#84CAFF] outline-4 p-2 rounded-[8px] mb-3"
                name="firstName"
                placeholder="Enter your first name" 
                {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 ">{formik.errors.firstName}</div>
                ) : null}
              </div>          

              <div className="md:w-[48%] w-full">
                <label htmlFor="last__name" >Last Name</label>
                <input
                id="last__name"
                type="text"
                className="block border border-grey-light w-full  outline-[#84CAFF] outline-4 p-2 rounded-[8px] mb-3"
                name="lastName"
                placeholder="Enter your last name"
                {...formik.getFieldProps("lastName")}
                />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 ">{formik.errors.lastName}</div>
              ) : null}
              </div>
            </div>

            <label htmlFor="email" >Email</label>           
            <input
                id='email'
              type="email"
              value={email} 
              onChange={e => setEmail(e.target.value)}
              className="block border border-grey-light w-full outline-[#84CAFF] outline-4 p-2 rounded-[8px] mb-4   "
              name="email"
              placeholder="yourname@email.com"
              {...formik.getFieldProps("email")}
            />
             {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 ">{formik.errors.email}</div>
              ) : null}
           
            <label htmlFor="message" >Message</label>
            <textarea
            id="message"
              type="text"
              value={inputVal} 
              onChange={e => setInputVal(e.target.value)}
                rows="4"
                className={`block border border-grey-light w-full  p-2 outline-none border-b-3  
              rounded-[8px] mb-1 focus:border-[#84CAFF] ${
                formik.errors.message ? "border-red-500 " : ""
              }`}
              name="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 " >{formik.errors.message}</div>
            ) : null}

            <div className="flex items-center">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    className="w-4 mt-3 h-4 rounded color-white hover:border-solid hover:border-4  hover:border-[#84CAFF]"
                />
                <p className="ml-3 mt-3">You agree to providing your  data to who may contact you.</p>
            </div>
            <button
            id="btn__submit"
              type="submit"
                className={`w-full text-center mt-6 py-3 rounded-[8px] bg-[#1570EF] text-white hover:bg-green-dark focus:outline-2 my-1 ${
                    !formik.touched.message  ? "opacity-50  " : "bg-[#175CD3]"
                }`}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;