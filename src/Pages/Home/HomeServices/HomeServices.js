import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeServiceCart from "./HomeServiceCart";
import { MdMiscellaneousServices } from "react-icons/md";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://flytographer-server.vercel.app/services?dataLimit=3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-24 ">
      <h2 className="text-3xl text-start ml-8 mb-10 font-bold">
        <MdMiscellaneousServices className="mr-4 text-6xl text-indigo-300 inline"></MdMiscellaneousServices>
        <span>Services from Flytographer</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-0 mx-auto ">
        {services.map((service) => (
          <HomeServiceCart
            key={service._id}
            service={service}
          ></HomeServiceCart>
        ))}
      </div>
      <Link to="/services">
        <button className="btn btn-warning my-10 text-white text-lg hover:bg-yellow-500">
          SEE ALL <FaArrowRight className="ml-2"></FaArrowRight>{" "}
        </button>
      </Link>
    </div>
  );
};

export default HomeServices;
