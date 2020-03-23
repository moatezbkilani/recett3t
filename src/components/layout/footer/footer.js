import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="https://github.com/moatezbkilani/" target="_blank" rel="noopener noreferrer">
                  MBKi
                </a>
              </li>
              <li>
                <a href="#b" target="_blank" rel="noopener noreferrer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#b" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © Coded by MBKi .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;