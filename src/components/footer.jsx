import React from "react";

const Footer = () => {
  return (
    //   <!-- footer -->
    <footer className="bg-white flex container justify-between mx-auto py-20">
      {/* <!-- logo, company name and copywrite section --> */}
      <div className="flex items-center">
        {/* <!-- logo --> */}
        <div>
          <img
            className="h-20"
            src={`https://res.cloudinary.com/dunevr8hc/image/upload/v1631489612/uredg2o9yrotdlml2adz.jpg`}
            alt="logo"
          />
        </div>

        {/* <!-- company name and copywrite --> */}
        <div className="ml-3">
          {/* <!-- company name --> */}
          <h3 className="font-bold text-2xl text-gray-800">
            Arrow Head - Construction
          </h3>

          {/* <!-- copywrite  --> */}
          <div className="font-thin text-md text-gray-800">
            Copywrite 2021 | ARROW HEAD -CONSTRUCTION | All rights reserved
          </div>
        </div>
      </div>
      {/* <!-- Social media section --> */}
      {/* <div className="flex">
        <div className="mx-2 h-16 w-16 rounded-sm bg-yellow-900"></div>
        <div className="mx-2 h-16 w-16 rounded-sm bg-yellow-900"></div>
        <div className="mx-2 h-16 w-16 rounded-sm bg-yellow-900"></div>
      </div> */}
    </footer>
  );
};

export default Footer;
