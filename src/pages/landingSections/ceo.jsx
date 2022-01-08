import React from "react";

import ceoImage from "../../assets/images/ceo.jpeg";
import consultant from "../../assets/images/consultant.jpeg";
import AHworker from "../../assets/images/AHworker.jpeg"

const Ceo = () => {
  return (
    <div className="w-full bg-gray-100 py-20 flex flex-wrap px-24 justify-between items-start">
      <div className="flex items-start" style={{width: "48%", marginBottom: 30}}>
        <div className="rounded-sm mr-8">
          <div
            className="w-36 h-36 bg-center bg-no-repeat bg-cover rounded-sm"
            style={{ backgroundImage: `url(${ceoImage})` }}
          ></div>
        </div>
        <div>
          <h3 className="font-bold text-2xl text-gray-800">
            Mathias Derek sturgilll
          </h3>
          <span className="font-normal text-lg text-gray-600 mt-2 flex mb-5">
            CEO, Arrow Head Construction
          </span>
          <p className="font-light text-md text-gray-900 w-96">
            The arrowhead construction carefully designed strategies based on
            decade of experience in all phase of construction.we provide
            superior services,keeping our clients and partner informed ,involved
            , and confident throughout the entire process .
          </p>
        </div>
      </div>

      <div className="flex items-start" style={{width: "48%", marginBottom: 30}}>
        <div className="rounded-sm mr-8">
          <div
            className="w-36 h-36 bg-center bg-no-repeat bg-cover rounded-sm"
            style={{ backgroundImage: `url(${consultant})` }}
          ></div>
        </div>
        <div>
          <h3 className="font-bold text-2xl text-gray-800">
            Matty denis Larsen
          </h3>
          <span className="font-normal text-lg text-gray-600 mt-2 flex mb-5">
            Manager of the project consultant and research ( architecture /
            interior designs )
          </span>
          <p className="font-light text-md text-gray-900 w-96"></p>
        </div>
      </div>
      
      <div className="flex items-start" style={{width: "48%", marginBottom: 30}}>
        <div className="rounded-sm mr-8">
          <div
            className="w-36 h-36 bg-center bg-no-repeat bg-cover rounded-sm"
            style={{ backgroundImage: `url(${AHworker})` }}
          ></div>
        </div>
        <div>
          <h3 className="font-bold text-2xl text-gray-800">
            Matty denis Larsen
          </h3>
          <span className="font-normal text-lg text-gray-600 mt-2 flex mb-5">
            Manager of the project consultant and research ( architecture /
            interior designs )
          </span>
          <p className="font-light text-md text-gray-900 w-96"></p>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
