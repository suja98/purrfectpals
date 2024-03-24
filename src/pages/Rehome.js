import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainLayout from "../layout/MainLayout";

function Rehome() {
  return (
    <MainLayout>
      <Helmet>
        <title>Rehome a Dog</title>
        <meta name="description" content="Rehome a Dog" />
      </Helmet>

      <div className="pageContainer">
        <h2 style={{ margin: "0 auto 3rem" }}>Rehome a Dog</h2>
        <p className="pageDescription">
          Are you unable to care for your dog anymore? We understand that life
          circumstances can change, and sometimes it's not possible to keep your
          furry friend. If you're looking to rehome your dog, we're here to
          help.
        </p>

        <p className="pageDescription">
          <h3 className="information">Why Choose Us?</h3>
        </p>
        <p className="block ml-10">
          <p className="pageDescription">
            <strong>Compassionate Care:</strong> We're committed to finding
            loving homes for every dog that comes into our care. Your dog's
            well-being is our top priority.
          </p>

          <p className="pageDescription">
            <strong>Experienced Team:</strong> Our team of animal care
            professionals has years of experience in rehoming dogs and ensuring
            they find the perfect match.
          </p>

          <p className="pageDescription">
            <strong>Supportive Process:</strong> We'll guide you through every
            step of the rehoming process, providing support and resources to
            make it as smooth and stress-free as possible.
          </p>
        </p>

        <p className="pageDescription">
          <h3 className="information">How It Works</h3>
        </p>

        <p className="block ml-10">
          <p className="pageDescription">
            <strong>Submit Your Dog's Information:</strong> Fill out our{" "}
            <span style={{ textDecoration: "underline", fontWeight: 600 }}>
              <Link to="/rehoming-form">online form</Link>
            </span>{" "}
            with details about your dog, including age, breed, temperament, and
            any medical or behavioral considerations.
            <p className="pageDescription">
              <strong>Meet and Greet: </strong> Once we receive your
              information, we'll schedule a meet and greet with you and your
              dog. This allows us to assess your dog's personality and needs.
            </p>
            <p className="pageDescription">
              <strong>Find a Loving Home:</strong> We'll work tirelessly to find
              the perfect match for your dog. We'll consider factors such as
              lifestyle, living situation, and compatibility with other pets.
            </p>
            <p className="pageDescription">
              <strong>Finalize the Adoption:</strong> Once we've found a
              suitable match, we'll facilitate the adoption process, ensuring
              all necessary paperwork is completed and your dog is placed in
              their new home.
            </p>
          </p>
        </p>

        <p className="pageDescription">
          <h3 className="information">Get Started</h3>
        </p>

        <p className="block ml-10">
          <p className="pageDescription">
            If you're ready to rehome your dog, please fill out our{" "}
            <span style={{ textDecoration: "underline", fontWeight: 600 }}>
              <Link to="/rehoming-form">online form</Link>
            </span>{" "}
            with your dog's information. Our team will review your submission
            and reach out to you to discuss the next steps.
          </p>
        </p>
      </div>
    </MainLayout>
  );
}

export default Rehome;
