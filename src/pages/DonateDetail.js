import React, { useState } from "react";

import { Helmet } from "react-helmet";
import MainLayout from "../layout/MainLayout";
import { GiSelfLove } from "react-icons/gi";

function DonateDetail() {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (event) => {
    const input = event.target.value;
    const formattedInput = cc_format(input);
    setCardNumber(formattedInput);
  };

  function cc_format(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.join(" ");
  }
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    let input = event.target.value;
    input = input.replace(/\D/g, "");
    if (input.length > 0) {
      if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(input[0])) {
        input = "0" + input;
      }
    }

    if (input.length > 2) {
      input = input.slice(0, 2) + "/" + input.slice(2);
    }
    setValue(input.slice(0, 5));
  };

  const [securityCode, setSecurityCode] = useState("");

  const handleSecurityCode = (event) => {
    let input = event.target.value;
    const updatedSecurityCode = input.replace(/\D/g, "").slice(0, 3);
    setSecurityCode(updatedSecurityCode);
  };
  return (
    <MainLayout>
      <Helmet>
        <title>Donation details</title>
        <meta
          name="description"
          content="Fill out details for your donation."
        />
      </Helmet>
      <div className="pageContainer">
        <div className="relative mx-auto w-full">
          <div className="grid min-h-screen">
            <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
              <div className="mx-auto w-full max-w-lg">
                <h3 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                  Card details
                </h3>
                <form className="mt-10 flex flex-col space-y-4">
                  <div>
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="purrfectpal@gmail.com"
                      className="mt-1 block w-full rounded py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="card-number" className="font-semibold">
                      Card number
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      placeholder="1234 5678 XXXX XXXX"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="block w-full rounded py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Expiration date</p>
                    <div className="flex gap-5">
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        value={value}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                        maxLength="5"
                        className="my-1 block w-36 rounded py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition"
                      />
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        value={securityCode}
                        onChange={handleSecurityCode}
                        placeholder="Security code"
                        maxLength="3"
                        className="my-1 block w-36 rounded py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="card-name" className="sr-only">
                      Card name
                    </label>
                    <input
                      type="text"
                      id="card-name"
                      name="card-name"
                      placeholder="Name on the card"
                      className="mt-1 block w-full rounded py-3 px-4 text-main-text text-sm placeholder-gray-300 shadow-sm outline-none transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 inline-flex w-full gap-3 items-center justify-center rounded bg-main-800 py-2.5 px-4 text-base text-main-text font-semibold tracking-wide hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-500 sm:text-lg uppercase"
                  >
                    Donate now
                    <GiSelfLove />
                  </button>
                </form>
                <p className="mt-10 text-center text-sm font-semibold">
                  By clicking donate, you agree to the{" "}
                  <a
                    href="#!"
                    className="whitespace-nowrap text-main-800 hover:text-main-900"
                  >
                    Terms and Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default DonateDetail;
