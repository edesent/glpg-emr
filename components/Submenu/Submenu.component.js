import React from "react";
import { StyledSubmenu, SubLinks } from "./Submenu.styles";

const Submenu = (props) => {
  const { title } = props;
  return (
    <StyledSubmenu>
      <h1>{title}</h1>
      <SubLinks>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </SubLinks>
    </StyledSubmenu>
  );
};

export default Submenu;
