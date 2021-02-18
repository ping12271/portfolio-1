import React from "react";
import styled from "styled-components";

const Nav = (props) => {

    const {routes} = props;

    return (
        <Container>
            {
                routes.map((item, index) => {
                    return (
                        <NavItem>
                            {item.name}
                        </NavItem>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 0 10px;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 16px;
  color: #333;
  font-weight: 400;
  &:hover {
    color: #18f;
  }
`;

export default Nav;