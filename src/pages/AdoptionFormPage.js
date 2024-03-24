import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import MainLayout from "../layout/MainLayout";
import useBreeds from "../components/Body/useBreeds";

function AdoptionFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const breeds = useBreeds();

  return (
    <MainLayout>
      <Helmet>
        <title>Adoption Form</title>
        <meta
          name="description"
          content="Fill out the form to apply for a dog adoption."
        />
      </Helmet>
      <div className="pageContainer">
        <h2 style={{ margin: "0 auto 3rem" }}>Adoption Form</h2>
        <div className="form">
          <p style={{ margin: "0 auto 2rem" }}>
            <span className="required">*</span> Mandatory field
          </p>
          <form
            onSubmit={handleSubmit((formData) =>
              setData(JSON.stringify(formData))
            )}
          >
            <div className="nameInput">
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="firstName">
                  First name: <span className="required">*</span>
                </label>
                <input
                  {...register("firstName", { required: true })}
                  placeholder="First name"
                  style={{
                    borderColor: errors.firstName
                      ? "var(--warning)"
                      : "var(--main-text)",
                  }}
                />
                {errors.firstName && (
                  <p className="required">First name is required</p>
                )}
              </div>
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="lastName">
                  Last name: <span className="required">*</span>
                </label>
                <input
                  {...register("lastName", { required: true })}
                  placeholder="Last name"
                  style={{
                    borderColor: errors.lastName
                      ? "var(--warning)"
                      : "var(--main-text)",
                  }}
                />
                {errors.lastName && (
                  <p className="mt-0 required">Last name is required</p>
                )}
              </div>
            </div>
            <div className="contactInput">
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="email" className="flex pt-4 h-10">
                  Email: <span className="required">*</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  style={{
                    borderColor: errors.email
                      ? "var(--warning)"
                      : "var(--main-text)",
                  }}
                />
                {errors.email && <p className="required">Email is required</p>}
              </div>
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="phone" className="flex pt-4 h-10">
                  Phone: <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Phone number"
                  style={{
                    borderColor: errors.phone
                      ? "var(--warning)"
                      : "var(--main-text)",
                  }}
                />
                {errors.phone && (
                  <p className="required">Phone number is required</p>
                )}
              </div>
            </div>
            <label htmlFor="address" className="flex pt-4 h-10">
              Home Address: <span className="required">*</span>
            </label>
            <input
              {...register("address", { required: true })}
              placeholder="Home Address"
              style={{
                borderColor: errors.address
                  ? "var(--warning)"
                  : "var(--main-text)",
              }}
            />
            {errors.address && <p className="required">Address is required</p>}

            <label htmlFor="petName" className="flex pt-4 h-10">
              Pet's ID (if any):
            </label>
            <input {...register("petName")} placeholder="Pet's Name" />
            <label htmlFor="adoptionDate" className="flex pt-4 h-10">
              Adoption Date: <span className="required">*</span>
            </label>
            <input
              type="date"
              {...register("adoptionDate", { required: true })}
              style={{
                borderColor: errors.adoptionDate
                  ? "var(--warning)"
                  : "var(--main-text)",
              }}
            />
            {errors.adoptionDate && (
              <p className="required">Adoption date is required</p>
            )}

            <label htmlFor="clientJob" className="flex pt-4 h-10">
              Your Occupation: <span className="required">*</span>
            </label>
            <input
              {...register("clientJob", { required: true })}
              placeholder="Your Job"
              style={{
                borderColor: errors.clientJob
                  ? "var(--warning)"
                  : "var(--main-text)",
              }}
            />
            {errors.clientJob && (
              <p className="required">Occupation is required</p>
            )}

            <label htmlFor="dogPreference" className="flex pt-4 h-10">
              Preferred Dog Breed: <span className="required">*</span>
            </label>
            <select
              {...register("dogPreference", { required: true })}
              style={{
                borderColor: errors.dogPreference
                  ? "var(--warning)"
                  : "var(--main-text)",
              }}
            >
              <option value="">Select...</option>
              {breeds.map((breed, index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {errors.dogPreference && (
              <p className="required">Dog breed preference is required</p>
            )}

            <label htmlFor="homeType">
              Type of Home: <span className="required">*</span>
            </label>
            <select
              {...register("homeType", { required: true })}
              style={{
                borderColor: errors.homeType
                  ? "var(--warning)"
                  : "var(--main-text)",
              }}
            >
              <option value="">Select...</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Other">Other</option>
            </select>
            {errors.homeType && (
              <p className="required">Type of home is required</p>
            )}

            <label htmlFor="aboutYou">
              Tell us about yourself and why you want to adopt a dog:{" "}
              <span className="required">*</span>
            </label>
            <textarea
              {...register("aboutYou", { required: true })}
              placeholder="About you and your interest in dog adoption"
              style={{
                borderColor: errors.aboutYou
                  ? "var(--warning)"
                  : "var(--main-text)",
              }}
            />
            {errors.aboutYou && (
              <p className="required">This information is required</p>
            )}

            <p>{data}</p>
            <input type="submit" />
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default AdoptionFormPage;
