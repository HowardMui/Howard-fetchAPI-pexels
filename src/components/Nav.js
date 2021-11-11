import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UlList = [
  { title: "Home", path: "/home" },
  { title: "About", path: "about" },
];

const Navbar = styled.nav``;

const NavMenuLinks = styled(Link)``;

const Nav = () => {
  return (
    <Navbar>
      {UlList.map((items, index) => (
        <NavMenuLinks as={Link} to={items.path} key={index}>
          {items.title}
        </NavMenuLinks>
      ))}
    </Navbar>
  );
};

export default Nav;
