import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../layout/MainLayout";
import MenuToggle from "../components/Body/MenuToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { PiPawPrint } from "react-icons/pi";
import "../styles/PageStyles.css";
import FAQData from "../Data/FAQData";

function FaQPage() {
  const [openMenus, setOpenMenus] = useState([]);

  return (
    <MainLayout>
      <Helmet>
        <title>Adoption FAQs</title>
        <meta name="description" content="Adoption FAQ" />
      </Helmet>
      <div className="pageContainer">
        <h2>
          Adoption FAQ<span className="lowercase">s</span>
        </h2>
        {FAQData.map((item) => (
          <div key={item.id} className="qa">
            <MenuToggle
              index={item.id}
              openMenus={openMenus}
              setOpenMenus={setOpenMenus}
            >
              <h4 className="questionContainer">
                <div className="svgContainer">
                  <PiPawPrint />
                </div>
                <span>{item.question}</span>
                <FontAwesomeIcon
                  icon={
                    openMenus.includes(item.id) ? faChevronUp : faChevronDown
                  }
                  className="chevron-of-h3"
                />
              </h4>
            </MenuToggle>
            <div
              className="answerContainer"
              style={{
                display: openMenus.includes(item.id) ? "block" : "none",
                fontSize: "16px",
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default FaQPage;
