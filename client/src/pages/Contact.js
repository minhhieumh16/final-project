import React from "react";
import Layout from "../components/Layout/Layout.js";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="img/contact-us-icon.png"
            alt=""
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className="col-md-4 text-center">
          <h1 className="bg-dark p-2 text-white">CONTACT US</h1>
          <p className="text-justify mt-2">sjdgkasgdjkasgdasgd</p>
          <p className="text-justify mt-3">
            <BiMailSend />
            :hieutmgcs18907@fpt.edu.vn
          </p>
          <p className="text-justify mt-3">
            <BiPhoneCall />: 0797862822
          </p>
          <p className="text-justify mt-2">
            <BiSupport /> 1800 6975
          </p>
          <p className="text-justify mt-2">
            <BiSupport /> 1800 6173
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
