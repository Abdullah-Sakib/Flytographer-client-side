import { Link } from "react-router-dom";
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-white text-black mt-16 border-t-2">
    <div>
      <span className="footer-title">Services</span> 
      <Link className="link link-hover">Printing</Link>
      <Link className="link link-hover">Day-long service</Link>
      <Link className="link link-hover">Download</Link>
      <Link className="link link-hover">special Sevice</Link>
    </div> 
    <div>
      <span className="footer-title">Flytographer</span> 
      <Link className="link link-hover">About me</Link>
      <Link className="link link-hover">Contact</Link>
      <Link className="link link-hover">Photos</Link>
      <Link className="link link-hover">Life Style</Link>
    </div> 
    <div>
      <span className="footer-title">Social Links</span> 
      <Link className="link link-hover">Facebook</Link>
      <Link className="link link-hover">Instagram</Link>
      <Link className="link link-hover">Linkedin</Link>
    </div>
  </footer>
  );
};

export default Footer;