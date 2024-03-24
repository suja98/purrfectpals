import { Link } from "react-router-dom";
import "../../styles/HeroSection.css";
import { BiHomeHeart } from "react-icons/bi";
import { PiUserCirclePlus } from "react-icons/pi";
import DogPaw from "./DogPaw";

function HeroSection() {
  return (
    <section>
      <main id="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Find your perfect furry companion</h1>
          <p className="hero-line">
            Join us in making a difference — adopt, don't shop!
          </p>
          <div className="button-hero-section">
            <Link to="/signup">
              <button
                className="button-hero"
                style={{
                  backgroundColor: "var(--white-text)",
                  color: "var(--main-text)",
                }}
              >
                SIGNUP
                <PiUserCirclePlus />
              </button>
            </Link>
            <Link to="/available-dogs">
              <button
                className="button-hero"
                style={{ border: "none", backgroundColor: "var(--light)" }}
              >
                ADOPT TODAY
                <BiHomeHeart />
              </button>
            </Link>
          </div>
        </div>
      </main>
      <DogPaw />
    </section>
  );
}

export default HeroSection;
