import { Link } from "react-router-dom";
import "../styles/Header.css";
import Nav from "./Navigation";
import { IKImage, IKContext } from "imagekitio-react";

function Header({ className }) {
  return (
    <header className={`header ${className} flex-column`} id="myHeader">
      <Link
        to="/"
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
      >
        <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
          <IKImage
            src="https://ik.imagekit.io/pbq9icsqc/logo-NO-lisc.webp?updatedAt=1720653473902"
            alt="Attapluming Company logo"
            className="ms-3"
            loading="lazy"
            width="300"
            height="100"
          />
        </IKContext>
      </Link>

      <Nav />
    </header>
  );
}
export default Header;
