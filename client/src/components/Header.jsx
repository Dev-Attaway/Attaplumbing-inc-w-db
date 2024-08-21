import { Link } from "react-router-dom";
import "../styles/Header.css";
import Nav from "./Navigation";
import CompanyLogo from "../assets/Company-logo.svg";

function Header({ className }) {
  return (
    <>
      <header className={`header ${className} flex-column`} id="myHeader">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        >
          <img src={CompanyLogo} alt="CompanyLogo" width="300" height="100" />
        </Link>

        <Nav />
      </header>
    </>
  );
}
export default Header;
