import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../layout/MainLayout";

function RehomingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  return (
    <MainLayout>
      <Helmet>
        <title>Rehome a Dog</title>
        <meta
          name="description"
          content="Fill out the form to rehome your dog with us."
        />
      </Helmet>
      <div className="pageContainer">
        <h2 style={{ margin: "0 auto 2rem" }}>Rehome a Dog</h2>
        <span className="pageDescription">
          Are you unable to care for your dog anymore? We understand that life
          circumstances can change, and sometimes it's not possible to keep your
          furry friend. If you're looking to rehome your dog, we're here to
          help.
        </span>
        <h2 style={{ margin: "0 auto 3rem" }}>Rehome Dog Application</h2>
        <div className="form">
          <form
            onSubmit={handleSubmit((formData) =>
              setData(JSON.stringify(formData))
            )}
          >
            <p style={{ margin: "0 auto 2rem" }}>
              <span className="required">*</span> Mandatory field
            </p>
            <div className="nameInput">
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="firstName">
                  First name:<span className="required">*</span>
                </label>
                <input
                  {...register("firstName", { required: true })}
                  placeholder="First name"
                  style={{
                    borderColor: errors.firstName
                      ? "var(--warning)"
                      : "initial",
                  }}
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
                  style={{
                    borderColor: errors.lastName ? "var(--warning)" : "initial",
                  }}
                />
                {errors.lastName && (
                  <p className="required">Last name is required</p>
                )}
              </div>
            </div>
            <div className="contactInput">
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="email">
                  Email:<span className="required">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  style={{
                    borderColor: errors.email ? "var(--warning)" : "initial",
                  }}
                />
                {errors.email && <p className="required">Email is required</p>}
              </div>
              <div style={{ display: "block", width: "50%" }}>
                <label htmlFor="phone">
                  Phone:<span className="required">*</span>
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Phone number"
                  style={{
                    borderColor: errors.phone ? "var(--warning)" : "initial",
                  }}
                />
                {errors.phone && <p className="required">Phone is required</p>}
              </div>
            </div>
            <label htmlFor="dogName">
              Dog's Name:<span className="required">*</span>
            </label>
            <input
              {...register("dogName", { required: true })}
              placeholder="Dog's Name"
              style={{
                borderColor: errors.dogName ? "var(--warning)" : "initial",
              }}
            />
            {errors.dogName && (
              <p className="required">Dog's Name is required</p>
            )}

            <label htmlFor="dogBreed">
              Dog's Breed:<span className="required">*</span>
            </label>
            <input
              {...register("dogBreed", { required: true })}
              placeholder="Dog's Breed"
              style={{
                borderColor: errors.dogBreed ? "var(--warning)" : "initial",
              }}
            />
            {errors.dogBreed && (
              <p className="required">Dog's Breed is required</p>
            )}

            <label htmlFor="dogAge">
              Dog's Age:<span className="required">*</span>
            </label>
            <input
              type="number"
              {...register("dogAge", { required: true })}
              placeholder="Dog's Age"
              style={{
                borderColor: errors.dogAge ? "var(--warning)" : "initial",
              }}
            />
            {errors.dogAge && <p className="required">Dog's Age is required</p>}

            <label htmlFor="dogDescription">
              Dog's Description:<span className="required">*</span>
            </label>
            <textarea
              {...register("dogDescription", { required: true })}
              placeholder="Dog's Description"
              style={{
                borderColor: errors.dogDescription
                  ? "var(--warning)"
                  : "initial",
              }}
            />
            {errors.dogDescription && (
              <p className="required">Dog's Description is required</p>
            )}

            <label htmlFor="reasonForRehoming">
              Reason for Rehoming:<span className="required">*</span>
            </label>
            <textarea
              {...register("reasonForRehoming", { required: true })}
              placeholder="Reason for Rehoming"
              style={{
                borderColor: errors.reasonForRehoming
                  ? "var(--warning)"
                  : "initial",
              }}
            />
            {errors.reasonForRehoming && (
              <p className="required">Reason for Rehoming is required</p>
            )}

            <p>{data}</p>
            <input type="submit" />
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default RehomingForm;
