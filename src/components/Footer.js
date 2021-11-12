import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterDiv = styled.div`
  background: rgb(206, 206, 206);
  text-align: center;
`;
const Logo = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  font-style: italic;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Logo as={Link} to="/">
        Howard.Co
      </Logo>
    </FooterDiv>
  );
};

export default Footer;
