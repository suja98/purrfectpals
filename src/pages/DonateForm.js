import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { GrLinkNext } from "react-icons/gr";
import { RiVisaFill, RiMastercardFill, RiPaypalFill } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa";

function DonateForm() {
  const [donationAmount, setDonationAmount] = useState("200,000");
  const [donationMessage, setDonationMessage] = useState(
    "200,000 VND could provide a special heat pad to keep our dogs warm during surgery"
  );
  const [donationImage, setDonationImage] = useState(
    "https://img.freepik.com/free-photo/corgi-dog-is-lying-blue-sofa_651396-2378.jpg?w=826"
  );

  const handleDonationChange = (amount) => {
    setDonationAmount(amount);
    switch (amount) {
      case "150,000":
        setDonationMessage(
          "150,000 VND could go toward giving our dogs the vaccinations they need to stay healthy"
        );
        setDonationImage(
          "https://img.freepik.com/free-photo/adorable-jack-russell-retriever-puppy-portrait_53876-64825.jpg?w=826"
        );
        break;
      case "500,000":
        setDonationMessage(
          "500,000 VND pays for all of the care a dog needs in their first week with us"
        );
        setDonationImage(
          "https://img.freepik.com/free-photo/front-view-cute-domestic-dog-pet_23-2148326233.jpg?w=826"
        );
        break;
      default:
        setDonationMessage(
          "200,000 VND could provide a special heat pad to keep our dogs warm during surgery"
        );
        setDonationImage(
          "https://img.freepik.com/free-photo/corgi-dog-is-lying-blue-sofa_651396-2378.jpg?w=826"
        );
        break;
    }
  };
  const handleCustomDonationChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setDonationAmount(value);
    setDonationMessage("Thank you for your generosity!");
    setDonationImage(
      "https://img.freepik.com/free-photo/cute-smiley-dog-wearing-sunglasses_23-2148865714.jpg?t=st=1711076066~exp=1711079666~hmac=a989ed2a73326eda362563860b00d9536a45529506422e54a2d62fecec18c913&w=826"
    );
  };
  return (
    <MainLayout>
      <Helmet>
        <title>Donate</title>
        <meta
          name="description"
          content="Make a donation to support our cause."
        />
      </Helmet>
      <div className="pageContainer">
        <h2 style={{ margin: "0 auto 2rem" }}>Donate</h2>
        <span className="pageDescription">
          Your donation helps us continue our mission of providing care and
          support to animals in need. Thank you for your generosity!
        </span>
        <div
          className="flex flex-col mx-auto my-8 p-6 max-w-lg bg-white shadow-lg rounded-lg "
          style={{
            backgroundColor: "var(--dark-card)",
            color: "var(--main-text)",
          }}
        >
          <p
            className="py-4 text-lg font-semibold rounded-lg flex justify-center items-center mb-4"
            style={{
              backgroundColor: "var(--light)",
              color: "var(--light-text)",
            }}
          >
            How much would you like to donate?
          </p>
          <div className="flex justify-between mb-3 gap-2">
            <button
              onClick={() => handleDonationChange("150,000")}
              type="submit"
              className="py-2 px-2 rounded-lg w-1/3"
            >
              150,000 VND
            </button>
            <button
              onClick={() => handleDonationChange("200,000")}
              type="submit"
              className="py-2 px-2 rounded-lg w-1/3"
            >
              200,000 VND
            </button>
            <button
              onClick={() => handleDonationChange("500,000")}
              type="submit"
              className="py-2 px-2 rounded-lg w-1/3"
            >
              500,000 VND
            </button>
          </div>
          <div className="flex items-center mb-4">
            <img
              src={donationImage}
              alt="A dog"
              className="rounded-lg shadow-lg mr-4 max-w-24"
            />
            <span>{donationMessage}</span>
          </div>
          <div className="flex mb-6">
            <label className="block mt-6 basis-3/4">
              Or enter your own amount:
            </label>
            <div className="flex flex-col mt-4 relative basis-3/4">
              <input
                className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-main-text focus:bg-white text-gray-700 pr-10"
                value={donationAmount}
                onChange={handleCustomDonationChange}
                required
              />
              <span className="absolute inset-y-0 right-1 top-2 flex items-center px-2 text-gray-600">
                ₫
              </span>
            </div>
          </div>
          <Link to="./details">
            <button
              type="submit"
              className="w-full py-4 text-lg font-semibold rounded-lg flex justify-center items-center gap-3"
            >
              Next
              <GrLinkNext />
            </button>
          </Link>
          <div className="flex justify-center items-center mt-6 gap-5 text-3xl">
            <RiVisaFill />
            <RiMastercardFill />
            <RiPaypalFill />
            <FaGooglePay />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default DonateForm;
