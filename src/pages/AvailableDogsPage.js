import React from "react";
import { Helmet } from "react-helmet";
import Body from "../components/Body/Body";
import MainLayout from "../layout/MainLayout";

function Adoption() {
  return (
    <MainLayout>
      <Helmet>
        <title>Available Dogs</title>
        <meta name="description" content="Available Dogs" />
      </Helmet>
      <Body />
    </MainLayout>
  );
}

export default Adoption;
