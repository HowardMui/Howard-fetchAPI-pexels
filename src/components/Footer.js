import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterDiv = styled.div``;
const Logo = styled(Link)``;

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
