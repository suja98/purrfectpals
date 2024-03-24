import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="footerContent newsLetter">
            <h3>Sign up for our newsletter</h3>
            <p>
              We'll send you monthly emails, packed with info about our work and
              pupdates about some of our favourite furry friends.
            </p>
            <form className="footerForm" action="">
              <input
                className="footerInput"
                type="email"
                placeholder="Email Address"
              />
              <button className="footerButton">
                <FaArrowRight />
              </button>
            </form>
          </div>

          <div className="footerContent usefulLinks">
            <strong>Useful links</strong>
            <Link to="/adoption-procedure">
              <span>Adoptiton procedure</span>
            </Link>
            <Link to="/donate">
              <span>Donate</span>
            </Link>
            <Link to>
              <span>Privacy</span>
            </Link>
            <Link to="/cruelty-report">
              <span>Report cruelty</span>
            </Link>
          </div>

          <div id="contactFooter" className="footerContent contactUs">
            <strong>Contact us</strong>
            <span>Phone number: +84 123456789</span>
            <span>E-mail: purrfectpals@gmail.com</span>
            <div className="socialMediaLinks">
              <a href="/#">
                <FaFacebookSquare />
              </a>
              <a href="/#">
                <FaXTwitter />
              </a>
              <a href="/#">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <span className="block h-9 pt-2">
          &copy; {new Date().getFullYear()} PURRFECTPALS
        </span>
      </footer>
    </>
  );
}

export default Footer;
