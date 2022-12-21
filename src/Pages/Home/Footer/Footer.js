import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-[3px] mt-16">
      <footer className="footer p-5 bg-white text-black  mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 py-10">
        <div>
          <span className="footer-title text-lg">Services</span>
          <Link className="link link-hover text-base">Printing</Link>
          <Link className="link link-hover text-base">Day-long service</Link>
          <Link className="link link-hover text-base">Download</Link>
          <Link className="link link-hover text-base">special Sevice</Link>
        </div>
        <div>
          <span className="footer-title text-lg">Flytographer</span>
          <Link className="link link-hover text-base">About me</Link>
          <Link className="link link-hover text-base">Contact</Link>
          <Link className="link link-hover text-base">Photos</Link>
          <Link className="link link-hover text-base">Life Style</Link>
        </div>
        <div>
          <span className="footer-title text-lg">Social Links</span>
          <Link className="link link-hover text-base">Facebook</Link>
          <Link className="link link-hover text-base">Instagram</Link>
          <Link className="link link-hover text-base">Linkedin</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
