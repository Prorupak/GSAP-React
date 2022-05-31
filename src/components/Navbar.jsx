import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1rem;

  .active {
    color: #88ce02;
  }
`;

const StyledLink = styled(NavLink).attrs({
  className: "active",
})``;

const Logo = styled.span.attrs({})`
  font-family: "Cookie", cursive;
  font-size: 1.2rem;
  font-weight: 600;
  color: #88ce02;
`;

const NavItems = styled.div`
  .active {
    color: #88ce02;
  }

  .inactive {
    color: #49c5b6;
  }

  ul {
    display: flex;
    gap: 10px;

    li {
      cursor: pointer;
      font-family: "Cookie", cursive;
      color: var(--color-text);
      font-size: 1.2rem;

      &:hover {
        color: #88ce02;
      }

      &:active {
        outline: none;
        color: #88ce02;
      }
    }
  }
`;

const Navbar = () => {
  console.log(window.location.pathname);
  return (
    <Nav>
      <Logo>GSAP</Logo>
      <NavItems>
        <ul>
          <StyledLink to="/circle-animations" className={`active`}>
            <li>Circle</li>
          </StyledLink>
        </ul>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
