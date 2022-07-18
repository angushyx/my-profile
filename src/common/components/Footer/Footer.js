import React from "react";
import styled from "styled-components";
import { color, text, devices } from "../../util/Variables";
import { FaMedium, FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaMedium, FaLinkedin, FaGithub } from "react-icons";
import { Link } from "react-router-dom";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  background: ${color.secondary6};
  > .wrapper {
    margin: auto 7%;
  }
`;
const Connect = styled.div`
  color: ${text.light};
  padding-bottom: 2rem;
  border-bottom: 1px solid #fff;
  .textGroup {
    padding: 0 1rem;
    flex: 0.5;
    > h1 {
      font-size: calc(1.8rem + 1.5vw);
      margin-bottom: calc(0.3rem + 1vw);
    }
    > h6 {
      margin-bottom: calc(0.3rem + 1vw);
      font-size: calc(1rem + 1vw);
    }
  }
  .imageGroup {
    flex: 0.5;
    display: flex;
    padding: 0.5rem 1rem;
    gap: 1.5rem;
    justify-content: start;
    align-items: center;
    font-size: calc(2rem + 2.5vw);
  }

  @media ${devices.mobileL} {
    display: flex;
    .imageGroup {
      gap: 2.5rem;
    }
  }
`;

const Terms = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  > li > a {
    font-size: calc(0.8rem + 1vw);
    color: #fff;
    line-height: 1.8;
  }
`;

const Contact = styled.div`
  height: calc(8rem + 1vw);
  background: ${color.secondary2};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  font-size: calc(0.8rem + 0.8vw);
  padding: 0 4rem;
  color: ${text.light};
  p > span {
    margin-left: 1rem;
  }
  @media ${devices.mobileL} {
    padding: 0 6rem;
  }
  @media ${devices.tablet} {
    padding: 0 9rem;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <div class="wrapper">
          <Connect>
            <div className="textGroup">
              <h1>Let's Connect</h1>
              <h6>
                Visits: <span>11985</span>
              </h6>
            </div>
            <div className="imageGroup">
              <FaMedium />
              <FaLinkedin />
              <FaGithub />
              {/* <Link to="/profiles/medium">
                <FaMedium />
              </Link>
              <Link to="/profiles/linkedin">
                <FaLinkedin />
              </Link>
              <Link to="/profiles/github">
                <FaGithub />
              </Link> */}
            </div>
          </Connect>
          <Terms>
            <li>
              <a href="">Report</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </Terms>
        </div>
      </FooterStyle>
      <Contact>
        <p>© 2022 itsangus. All rights reserved.</p>
        <p>
          Made with by Me!<span> v1.0.0</span>{" "}
        </p>
      </Contact>
    </>
  );
};

export default Footer;
