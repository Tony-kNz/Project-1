import React, { useState } from "react";
import * as emailjs from "emailjs-com";

// icon
import { Close } from "../assets/svg";

// component
import Input from "../components/input";

const Contact = () => {
  const defaultValue = {
    name: "",
    companyName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [creds, setCreds] = useState(defaultValue);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(true);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds((creds) => ({ ...creds, [name]: value }));
  };

  const resetForm = () => {
    setCreds(defaultValue);
    setSent(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: creds.name,
      from_email: creds.email,
      to_name: "Arrow Head construction",
      subject: creds.subject,
      message_html: creds.message,
    };
    try {
      await emailjs.send(
        "gmail",
        process.env.REACT_APP_EMIAL_TEMPLATE,
        templateParams,
        process.env.REACT_APP_EMIAL_USER_ID
      );

      resetForm();
    } catch (err) {
      setError(true);
    }
  };
  return (
    // <!-- content  -->
    <div className="flex justify-between">
      {/* <!-- contact part  --> */}
      {sent ? (
        <div className="container mx-auto flex items-center justify-center w-5/12">
          <div className="flex flex-col items-center px-8 py-8 rounded-sm bg-gray-200 mb-96 relative">
            {/* close icon */}
            <div
              onClick={() => setSent(false)}
              className="absolute right-4 top-4 px-2 py2 rounded-full cursor-pointer"
            >
              <Close />
            </div>

            {/* content */}
            <h3 className="font-thin mb-5 text-3xl text-gray-900">Success</h3>
            <p className="font-semibold text-sm">
              Your message has recieved we will get back to you soon
            </p>
          </div>
        </div>
      ) : (
        <div className="w-5/12 container mx-auto mt-20 px-10">
          {/* <!-- title --> */}
          <h3 className="font-semibold text-2xl mb-10 mt-8">
            Want a Quote from us ?
          </h3>

          {error ? (
            <div className="flex items-center px-4 py-4 rounded-sm bg-gray-200 relative justify-between items-center w-full mb-4">
              {/* content */}

              <p className="font-semibold text-sm">Something went wrong</p>

              {/* close icon */}
              <div
                onClick={() => setError(false)}
                className=" px-2 py2 rounded-full cursor-pointer"
              >
                <Close />
              </div>
            </div>
          ) : null}

          {/* <!-- contact form --> */}
          <form onSubmit={onSubmit}>
            <Input
              name="name"
              value={creds.name}
              label="Name"
              onChange={onChange}
              type="text"
            />
            <Input
              name="companyName"
              value={creds.companyName}
              label="Company Name"
              onChange={onChange}
              type="text"
            />
            <Input
              name="email"
              value={creds.email}
              label="Email address"
              onChange={onChange}
              type="email"
            />

            {/* <!-- button --> */}
            <button
              className="
              px-10
              py-3
              rounded-sm
              font-semibold
              flex
              items-center
              justify-center
              text-white
              bg-gray-800
            "
              type="submit"
            >
              Contact us
            </button>
          </form>
        </div>
      )}
      {/* <!-- half image --> */}
      <div
        className="w-6/12 h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3637834/pexels-photo-3637834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
        }}
      ></div>
    </div>
  );
};

export default Contact;
