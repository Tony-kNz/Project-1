import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Top contact nav --> */}
      <div className="bg-yellow-300">
        <div className="container flex justify-between mx-auto px-6 py-2 text-gray-800">
          <div className="flex">
            {/* <!-- Image --> */}
            <span>(920) 777-1430</span>
          </div>
          <div>
            {/* <!-- Image --> */}
            <span>Herring rd ,Colorado springs co 80908</span>
          </div>
          <div>
            {/* <!-- Image --> */}
            <span>mathiasderek501@gmail.com</span>
          </div>
        </div>
      </div>

      {/* <!-- Main nav --> */}
      <div className="bg-gray-900 sticky top-0 z-10">
        <div className="container flex justify-between mx-auto items-center px-3">
          {/* <!-- logo --> */}
          <Link
            to="/"
            className="flex font-bold text-white rounded px-4 items-center"
          >
            <img
              className="h-16"
              src={`https://res.cloudinary.com/dunevr8hc/image/upload/v1631489612/uredg2o9yrotdlml2adz.jpg`}
              alt="logo"
            />
            <span className="ml-5">Arrow Head Costruction</span>
          </Link>

          {/* <!-- navigation links --> */}
          <div className="flex px-2 text-white">
            <a className="ml-8" href="/#history">
              About
            </a>

            <Link to="/projects" className="ml-8">
              Projects
            </Link>
            <Link className="ml-8" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
