// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  border: solid 2px black;
  font-size: 1.25rem;
  padding: 0.5rem;
  color: #fff;
  background: ${(prop) => (prop.red ? "palevioletred" : "purple")};
  cursor: pointer;
`;
