import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UlList = [
  { title: "Home", path: "/" },
  { title: "About", path: "about" },
];

const Navbar = styled.nav`
  background: rgb(155, 107, 155);
`;

const NavWrapper = styled.div`
  text-align: end;
  margin: 1rem 2rem;
`;

const NavMenuLinks = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 1rem;
  text-transform: uppercase;
`;

const Nav = () => {
  return (
    <Navbar>
      <NavWrapper>
        {UlList.map((items, index) => (
          <NavMenuLinks as={Link} to={items.path} key={index}>
            {items.title}
          </NavMenuLinks>
        ))}
      </NavWrapper>
    </Navbar>
  );
};

export default Nav;
