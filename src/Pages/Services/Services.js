import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto grid grid-cols-3 gap-10">
        
        {
          services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
        }
    
      </div>
    </div>
  );
};

export default Services;