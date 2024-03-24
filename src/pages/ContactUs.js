import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../layout/MainLayout";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ContactUs() {
  return (
    <MainLayout>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with us. Find our contact details here."
        />
      </Helmet>
      <div className="pageContainer">
        <h2 style={{ margin: "0 auto 2rem" }}>Contact Us</h2>
        <span className="pageDescription">
          Have questions or want to learn more about our organization? Feel free
          to reach out to us. Our dedicated team is here to assist you.
        </span>
        <span className="pageDescription">
          <p>
            <strong>Working Hours:</strong> Monday - Friday, 9:00 AM to 5:00 PM
          </p>
          <p>
            <strong>Phone number:</strong> +84 123456789
          </p>
          <p>
            <strong>E-mail:</strong> purrfectpals@gmail.com
          </p>
          <div className="socialMediaLinks">
            <a href="/#" className="mr-3">
              <FaFacebookSquare />
            </a>
            <a href="/#" className="mr-3">
              <FaXTwitter />
            </a>
            <a href="/#">
              <FaTiktok />
            </a>
          </div>
        </span>

        <div className="contactForm"></div>
      </div>
    </MainLayout>
  );
}

export default ContactUs;
