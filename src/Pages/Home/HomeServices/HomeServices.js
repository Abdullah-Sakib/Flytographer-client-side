import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeServiceCart from "./HomeServiceCart";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services?dataLimit=3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-start ml-8 mb-7 mt-16 font-bold">
        Photography services from Flytographer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        {
          services.map(service => <HomeServiceCart key={service._id} service={service}></HomeServiceCart>)
        }

      </div>
      <Link to="/services">
        <button className="btn btn-warning my-10 text-white">
          SEE ALL <FaArrowRight className="ml-2"></FaArrowRight>{" "}
        </button>
      </Link>
    </div>
  );
};

export default HomeServices;
