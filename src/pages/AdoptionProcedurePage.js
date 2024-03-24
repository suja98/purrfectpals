import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../layout/MainLayout";
import { FaWpforms } from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";

function AdoptionProcedure() {
  return (
    <MainLayout>
      <Helmet>
        <title>Adoption Procedure</title>
        <meta name="description" content="Available Dogs" />
      </Helmet>
      <div className="pageContainer">
        <h2 style={{ marginLeft: "0" }}>Adoption Procedure</h2>
        <div className="allSteps">
          <div className="stepContainer">
            <div className="stepIconContainer">
              <FaWpforms />
            </div>
            <div className="stepContent">
              <h3>1. Fill out the paperwork.</h3>
              <span>
                Before welcoming a furry friend into your home, it's important
                to start by filling out the necessary paperwork. This paperwork
                helps us gather essential information about you, your lifestyle,
                and your preferences. It ensures that we match you with a dog
                that aligns with your needs and circumstances. Additionally, it
                helps us maintain records for legal and administrative purposes.
                Rest assured, our staff will guide you through the process,
                making it simple and straightforward. You can also fill out the
                form online by clicking{" "}
                <strong>
                  <Link to="/adoption-form">here</Link>
                </strong>
                .
              </span>
            </div>
          </div>
          <div className="stepContainer">
            <div className="stepIconContainer">
              <MdOutlinePayment />
            </div>
            <div className="stepContent">
              <h3>2. Pay the adoption fee.</h3>
              <span>
                The adoption fee supports our efforts in caring for dogs. It
                covers vaccinations, food, and shelter maintenance. It's a small
                contribution to giving your new pet a loving home.
                <br />
              </span>
              <ul className="adoptionFee">
                <li>Puppy Adoption Fee: $150 - $300</li>
                <span>
                  This fee covers vaccinations, deworming, and spaying/neutering
                  for puppies.
                </span>
                <li>Adult Dog Adoption Fee: $100 - $200</li>
                <span>
                  This fee includes vaccinations, deworming, and
                  spaying/neutering for adult dogs.
                </span>
                <li>Senior Dog Adoption Fee: $50 - $100</li>
                <span>
                  Seniors dogs typically have lower adoption fees to encourage
                  their adoption. This fee includes vaccinations, deworming, and
                  spaying/neutering for senior dogs.
                </span>
              </ul>
            </div>
          </div>
          <div className="stepContainer">
            <div className="stepIconContainer">
              <TbHomeCheck />
            </div>
            <div className="stepContent">
              <h3>3. Set up a home visit.</h3>
              <span>
                After submitting your paperwork and paying the adoption fee,
                we'll arrange a home visit to ensure that your living
                environment is suitable for a new dog. During the home visit,
                one of our experienced staff members or volunteers will assess
                factors such as safety, space, and potential hazards. This visit
                helps us ensure the well-being and happiness of both you and
                your future pet. It also provides an opportunity for you to ask
                any questions you may have and receive personalized advice on
                preparing your home for your new furry family member.
              </span>
            </div>
          </div>
          <div className="stepContainer">
            <div className="stepIconContainer">
              <AiOutlineSchedule />
            </div>
            <div className="stepContent">
              <h3>4. Set up your pickup.</h3>
              <span>
                Once the paperwork is complete, the adoption fee is paid, and
                the home visit is successfully conducted, it's time to set up
                your pickup. This exciting step marks the beginning of your
                journey with your new canine companion. We'll coordinate a
                convenient time for you to come to the shelter and meet your
                adopted dog. Our staff will provide you with all the necessary
                information, including care instructions, medical records, and
                any supplies you may need. We'll also ensure that you have
                ongoing support and resources as you transition into life with
                your new furry friend. Get ready to embark on a rewarding and
                fulfilling adventure with your loyal companion!
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AdoptionProcedure;
