import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        className="absolute inset-0 object-cover w-full h-full "
        alt=""
      />
      <div className="relative  bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-[-2px] text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative h-[70vh] md:h-[90vh] px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex justify-center items-center h-full">
            <div className="w-full mb-12 lg:mb-0 lg:w-7/12">
              <h2
                className="max-w-xl mx-auto mb-6 font-thin text-base-200 text-3xl  tracking-tight sm:text-5xl sm:leading-none "
                style={{ fontFamily: "Berkshire Swash" }}
              >
                Capture every precious moment with flytographer
              </h2>
              <p
                className="max-w-xl mx-auto mb-4 text-white md:text-xl"
                style={{ fontFamily: "Berkshire Swash" }}
              >
                Only photography has been able to divide human life into a
                series of moments, each of them has the value of a complete
                existence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
