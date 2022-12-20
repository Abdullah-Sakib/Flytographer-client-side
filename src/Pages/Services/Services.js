import React, { useEffect, useState } from "react";
import useTitle from "../../CustomHooks/useTitle";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://flytographer-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [setLoading]);
  useTitle("Services")
  return (
    <div>

      {loading && (
        <button className="btn btn-warning btn-circle loading text-white "></button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mx-auto">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
}; 

export default Services;
