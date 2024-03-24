import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import MainLayout from "../layout/MainLayout";

function FosterCareApplication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const watchStartDate = watch("fosterStartDate", startDate);
  const watchEndDate = watch("fosterEndDate", endDate);

  useEffect(() => {
    if (watchStartDate && watchEndDate && watchStartDate > watchEndDate) {
      setEndDate(watchStartDate);
    }
  }, [watchStartDate, watchEndDate]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <MainLayout>
      <Helmet>
        <title>Foster Care Application</title>
        <meta
          name="description"
          content="Fill out the form to apply for dog foster care."
        />
      </Helmet>
      <div className="pageContainer">
        <h2 style={{ margin: "0 auto 3rem" }}>Foster Care</h2>
        <span className="pageDescription">
          PURRFECTPALS’s Foster Care program provides temporary homes to animals
          who need a helping hand. This might be because these animals are too
          small or young to be adopted, recovering from illness or surgery, are
          undergoing rehabilitation or even just finding the shelter environment
          too stressful. Our foster care program also supports animals in
          regional locations that do not have PURRFECTPALS facilities. By
          placing animals into foster homes, it provides them with the care and
          support they need until they are ready to be adopted into loving
          forever homes. Becoming an PURRFECTPALS foster carer is an incredibly
          rewarding experience. It’s the opportunity to make a real difference
          to the lives of some of the state’s most vulnerable animals.
        </span>
        <h2 style={{ margin: "0 auto 3rem" }}>Foster Care Application</h2>

        <div className="form">
          <p style={{ margin: "0 auto 2rem" }}>
            <span className="required">*</span> Mandatory field
          </p>
          <form onSubmit={handleSubmit((formData) => console.log(formData))}>
            {/* Name Inputs */}
            <div className="nameInput">
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="firstName">
                  First name:<span className="required">*</span>
                </label>
                <input
                  {...register("firstName", { required: true })}
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="required">First name is required</p>
                )}
              </div>
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="lastName">
                  Last name:<span className="required">*</span>
                </label>
                <input
                  {...register("lastName", { required: true })}
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="required">Last name is required</p>
                )}
              </div>
            </div>
            {/* Contact Inputs */}
            <div className="contactInput">
              <div style={{ display: "block", width: "50%" }}>
                <label className="flex pt-4 h-10" htmlFor="email">
                  Email:<span className="required">*</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {errors.email && <p className="required">Email is required</p>}
              </div>
              <div style={{ display: "block", width: "50%" }}>
                <label className="flex pt-4 h-10" htmlFor="phone">
                  Phone:<span className="required">*</span>
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Phone number"
                />
                {errors.phone && <p className="required">Phone is required</p>}
              </div>
            </div>
            {/* Address Input */}
            <label className="flex pt-4 h-10" htmlFor="address">
              Home Address:<span className="required">*</span>
            </label>
            <input
              {...register("address", { required: true })}
              placeholder="Home Address"
            />
            {errors.address && <p className="required">Address is required</p>}
            {/* Date Inputs */}
            <label className="flex pt-4 h-10">
              Available Foster Period:<span className="required">*</span>
            </label>
            <div style={{ display: "flex", gap: "15px" }}>
              <input
                type="date"
                {...register("fosterStartDate", { required: true })}
                min={today}
              />
              <span className="flex pt-2 h-10">to</span>
              {errors.fosterStartDate && (
                <p className="required">Start date is required</p>
              )}
              <input
                type="date"
                {...register("fosterEndDate", { required: true })}
                min={watchStartDate || today}
              />
              {errors.fosterEndDate && (
                <p className="required">End date is required</p>
              )}
            </div>

            {/* Additional Inputs */}
            <label className="flex pt-4 h-10" htmlFor="currentPets">
              Current Pets:
            </label>
            <textarea
              {...register("currentPets")}
              placeholder="Details about your current pets"
            />
            <label htmlFor="fosteringExperience">Fostering Experience:</label>
            <textarea
              {...register("fosteringExperience")}
              placeholder="Your experience with pet fostering"
            />
            <label htmlFor="homeType">
              Type of Home:<span className="required">*</span>
            </label>
            <select {...register("homeType", { required: true })}>
              <option value="">Select...</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Other">Other</option>
            </select>
            {errors.homeType && (
              <p className="required">Type of home is required</p>
            )}
            <label htmlFor="aboutYou">
              Tell us about yourself and why you want to foster a dog:
              <span className="required">*</span>
            </label>
            <textarea
              {...register("aboutYou", { required: true })}
              placeholder="About you and your interest in dog fostering"
            />
            {errors.aboutYou && (
              <p className="required">This field is required</p>
            )}
            <input type="submit" />
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default FosterCareApplication;
