import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../layout/MainLayout";

function CrueltyReportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  return (
    <MainLayout>
      <Helmet>
        <title>Report Animal Cruelty</title>
        <meta
          name="description"
          content="Fill out the form to report an incident of animal cruelty."
        />
      </Helmet>
      <div className="pageContainer">
        <h2 style={{ margin: "0 auto 2rem" }}>Report Animal Cruelty</h2>
        <span className="pageDescription">
          Witnessing animal cruelty can be upsetting, but your report can help.
          Please provide as much information as possible to aid in the
          investigation.
        </span>
        <h2 style={{ margin: "0 auto 3rem" }}>Cruelty Report Form</h2>
        <div className="form">
          <p style={{ margin: "0 auto 2rem" }}>
            <span className="required">*</span> Mandatory field
          </p>
          <form
            onSubmit={handleSubmit((formData) =>
              setData(JSON.stringify(formData))
            )}
          >
            <div className="contactInput">
              <div style={{ display: "block", width: "100%" }}>
                <label htmlFor="reporterName">
                  Your Name:<span className="required">*</span>
                </label>
                <input
                  {...register("reporterName", { required: true })}
                  placeholder="Your Name"
                  style={{
                    borderColor: errors.reporterName
                      ? "var(--warning)"
                      : "initial",
                  }}
                />
                {errors.reporterName && (
                  <p className="required">Your name is required</p>
                )}
              </div>
            </div>
            <div className="contactInput">
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="email" className="flex pt-4 h-10">
                  Your Email:<span className="required">*</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  style={{
                    borderColor: errors.email ? "var(--warning)" : "initial",
                  }}
                />
                {errors.email && <p className="required">Email is required</p>}
              </div>
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="phone" className="flex pt-4 h-10">
                  Your Phone:<span className="required">*</span>
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Your Phone Number"
                  style={{
                    borderColor: errors.phone ? "var(--warning)" : "initial",
                  }}
                />
                {errors.phone && (
                  <p className="required">Phone number is required</p>
                )}
              </div>
            </div>
            <label htmlFor="incidentLocation" className="flex pt-4 h-10">
              Incident Location:<span className="required">*</span>
            </label>
            <input
              {...register("incidentLocation", { required: true })}
              placeholder="Incident Location"
              style={{
                borderColor: errors.incidentLocation
                  ? "var(--warning)"
                  : "initial",
              }}
            />
            {errors.incidentLocation && (
              <p className="required">Incident location is required</p>
            )}

            <label htmlFor="incidentDate" className="flex pt-4 h-10">
              Incident Date:<span className="required">*</span>
            </label>
            <input
              type="date"
              {...register("incidentDate", { required: true })}
              style={{
                borderColor: errors.incidentDate ? "var(--warning)" : "initial",
              }}
            />
            {errors.incidentDate && (
              <p className="required">Incident date is required</p>
            )}

            <label htmlFor="animalDescription" className="flex pt-4 h-10">
              Animal Description:<span className="required">*</span>
            </label>
            <textarea
              {...register("animalDescription", { required: true })}
              placeholder="Description of the animal(s) involved"
              style={{
                borderColor: errors.animalDescription
                  ? "var(--warning)"
                  : "initial",
              }}
            />
            {errors.animalDescription && (
              <p className="required">Animal description is required</p>
            )}

            <label htmlFor="incidentDescription">
              Incident Description:<span className="required">*</span>
            </label>
            <textarea
              {...register("incidentDescription", { required: true })}
              placeholder="Detailed description of the incident"
              style={{
                borderColor: errors.incidentDescription
                  ? "var(--warning)"
                  : "initial",
              }}
            />
            {errors.incidentDescription && (
              <p className="required">Incident description is required</p>
            )}

            <p>{data}</p>
            <input type="submit" />
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default CrueltyReportForm;
