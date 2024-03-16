import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Recipes</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/mstsurnalyakter"
              target="_blank"
              className="text-3xl cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mst-surnaly-akter/"
              target="_blank"
              className="text-3xl cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/mstsurnalyakter"
              target="_blank"
              className="text-3xl cursor-pointer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://web.facebook.com/mstsurnalyakter/"
              target="_blank"
              className="text-3xl cursor-pointer"
            >
              <FaFacebook />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by NutriBytes</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
