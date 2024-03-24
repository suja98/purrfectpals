import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../layout/MainLayout";

function JoinOurTeam() {
  return (
    <MainLayout>
      <Helmet>
        <title>Join Our Team</title>
        <meta name="description" content="Join Our Team" />
      </Helmet>
      <div className="pageContainer">
        <h2 style={{ margin: "0 auto 3rem" }}>Join Our Team</h2>
        <p className="pageDescription">
          At PURRFECTPALS, we're always looking for passionate individuals to
          join our team and make a difference in the lives of animals. Whether
          you're an experienced animal care professional or someone looking to
          contribute their skills and talents, we have opportunities for you.
        </p>
        <p className="pageDescription">
          <h3 className="information">Why Join Us?</h3>
        </p>
        <p className="block ml-10">
          <p className="pageDescription">
            <strong>Make a Difference:</strong> Every day, we work towards
            providing love, care, and shelter to animals in need. Join us in
            making a positive impact on their lives.
          </p>

          <p className="pageDescription">
            <strong>Grow Your Skills:</strong> We offer opportunities for growth
            and development, whether you're interested in animal care,
            administration, marketing, or fundraising.
          </p>

          <p className="pageDescription">
            <strong>Be Part of a Community:</strong> Join a team of dedicated
            individuals who share your passion for animals and making a
            difference in the world.
          </p>
        </p>
        <p className="pageDescription">
          <h3 className="information">Current Openings</h3>
        </p>
        <p className="block ml-10">
          <p className="pageDescription">
            <strong>Animal Caretaker:</strong> Responsible for feeding,
            grooming, and providing medical care to our animals.
          </p>
          <p className="pageDescription">
            <strong>Volunteer Coordinator:</strong> Manage our volunteer
            program, recruit and train volunteers, and coordinate volunteer
            activities.
          </p>
          <p className="pageDescription">
            <strong>Marketing Specialist:</strong> Develop and execute marketing
            campaigns to promote our organization and increase awareness of our
            mission.
          </p>
          <p className="pageDescription">
            <strong>Fundraising Coordinator:</strong> Plan and implement
            fundraising events and campaigns to support our organization's
            programs and initiatives.
          </p>
        </p>
        <p className="pageDescription">
          <h3 className="information">How to Apply</h3>
        </p>
        <p className="block ml-10">
          <p className="pageDescription">
            If you're interested in joining our team, please send your resume
            and a cover letter to <strong>purrfectpals@gmail.com</strong>. Be
            sure to specify the position you're applying for in the subject
            line. We look forward to hearing from you!
          </p>
        </p>
      </div>
    </MainLayout>
  );
}

export default JoinOurTeam;
