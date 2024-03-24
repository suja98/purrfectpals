import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AvailableDogsPage from "./pages/AvailableDogsPage";
import AdoptionProcedurePage from "./pages/AdoptionProcedurePage";
import FaQPage from "./pages/FaQPage";
import AdoptionFormPage from "./pages/AdoptionFormPage";
import FosterCareApplication from "./pages/FosterCareApplication";
import JoinOurTeam from "./pages/JoinOurTeam";
import Rehome from "./pages/Rehome";
import RehomingForm from "./pages/RehomingForm";
import CrueltyReportForm from "./pages/CrueltyReportForm";
import ContactUs from "./pages/ContactUs";
import DonateForm from "./pages/DonateForm";
import DonateDetail from "./pages/DonateDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/available-dogs",
    element: <AvailableDogsPage />,
  },
  {
    path: "/adoption-procedure",
    element: <AdoptionProcedurePage />,
  },
  {
    path: "/faq",
    element: <FaQPage />,
  },
  {
    path: "/adoption-form",
    element: <AdoptionFormPage />,
  },
  {
    path: "/foster-care-application",
    element: <FosterCareApplication />,
  },
  {
    path: "/join-our-team",
    element: <JoinOurTeam />,
  },
  {
    path: "/rehome",
    element: <Rehome />,
  },
  {
    path: "/rehoming-form",
    element: <RehomingForm />,
  },
  {
    path: "/cruelty-report",
    element: <CrueltyReportForm />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/donate",
    element: <DonateForm />,
  },
  {
    path: "/donate/details",
    element: <DonateDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
