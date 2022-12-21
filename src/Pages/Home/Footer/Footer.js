import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-[3px] mt-16">
      <footer className="footer p-5 bg-white text-black  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 py-10">
        <div>
          <span className="footer-title text-xl">Services</span>
          <Link className="link link-hover text-lg">Printing</Link>
          <Link className="link link-hover text-lg">Day-long service</Link>
          <Link className="link link-hover text-lg">Download</Link>
          <Link className="link link-hover text-lg">special Sevice</Link>
        </div>
        <div>
          <span className="footer-title text-xl">Flytographer</span>
          <Link className="link link-hover text-lg">About me</Link>
          <Link className="link link-hover text-lg">Contact</Link>
          <Link className="link link-hover text-lg">Photos</Link>
          <Link className="link link-hover text-lg">Life Style</Link>
        </div>
        <div>
          <span className="footer-title text-xl">Social Links</span>
          <Link className="link link-hover text-lg">Facebook</Link>
          <Link className="link link-hover text-lg">Instagram</Link>
          <Link className="link link-hover text-lg">Linkedin</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
