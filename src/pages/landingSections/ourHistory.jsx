import React from "react";

// images
import commercialImage from "../../assets/images/commercial_services.jpeg";
import residentialImage from "../../assets/images/residential_services.jpeg";

const OurHistory = () => {
  return (
    <>
      {/* <!-- Section Our history --> */}
      <section className="mt-20 container mx-auto">
        {/* <!-- section title --> */}
        <h1 className="font-bold text-3xl text-center mb-20">About us</h1>

        {/* <!-- section content 1 --> */}
        <div className="flex justify-between items-center mb-20">
          {/* text section */}
          <div className="flex flex-col w-7/12">
            {/* heading */}
            <h3 className="mb-5 font-bold text-2xl text-gray-800">
              Commercial buildings
            </h3>
            {/* <!-- text --> */}
            <p className=" font-light text-gray-600 text-lg">
              Our track record at Arrow Head construction has constantly
              revealed that we create commercial buildings that improve
              productivity in the work space, we pay attention to ventilation,
              accessibility, modularity & Flexibilty. In one word!, our clients
              are always satisfied and they keep coming back for more.
            </p>
          </div>

          {/* <!-- image --> */}
          <div
            style={{ backgroundImage: `url(${commercialImage})` }}
            className="w-4/12 rounded-sm bg-gray-400 h-72 bg-center bg-no-repeat bg-cover"
          ></div>
        </div>

        {/* <!-- section content 2 --> */}
        <div className="flex justify-between items-center mb-20">
          {/* <!-- image --> */}
          <div
            style={{ backgroundImage: `url(${residentialImage})` }}
            className="w-4/12 rounded-sm bg-gray-400 h-72 bg-center bg-no-repeat bg-cover"
          ></div>

          <div className="flex flex-col w-7/12">
            {/* heading */}
            <h3 className="mb-5 font-bold text-2xl text-gray-800">
              Residential buildings
            </h3>
            {/* <!-- text --> */}
            <p className=" font-light text-gray-600 text-lg">
              We don't just build, we create a living space for our clients
              Inline with industry best practices & our robust experience in
              building residential spaces, we pay attention too all details that
              would ensure maximum comfort, convenience & Luxury; we turn your
              vision of an ideal house into a reality!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurHistory;
