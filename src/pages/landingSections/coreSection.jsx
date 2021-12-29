import React from "react";

// data
import { CoreValues } from "../../data";

const CoreSection = () => {
  return (
    <>
      {/* <!-- Section Our core values --> */}
      <section className="container mx-auto mb-10">
        {/* <!-- list of 3 things --> */}
        <div className="flex justify-around mb-10 flex-wrap">
          {/* <!-- list item --> */}
          {CoreValues.map((item, index) => (
            <div
              className="w-1/3 mb-10 flex flex-col items-center justify-center"
              key={`core-value-${index}`}
            >
              {/* <!-- image holder --> */}
              <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
                <item.Icon className="w-10 h-10" />
              </div>
              {/* <!-- title --> */}
              <h4 className="mt-3 mb-5 font-bold text-lg">{item.name}</h4>
              {/* <!-- content --> */}
              <span className="w-2/3 text-center text-sm text-gray-60">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoreSection;
