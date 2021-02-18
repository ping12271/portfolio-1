import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import {BiMenu} from 'react-icons/all';
import {setBoxShadow} from "../../../styled/Utill.Styled";

const routes = [
    {
        name: 'home'
    },
    {
        name: 'about'
    },
    {
        name: 'works'
    },
    {
        name: 'skills'
    },
    {
        name: 'contact'
    },
]

const Header = () => {

  return (
    <Container>
        <Logo>portfolio</Logo>
        <Nav routes={routes}/>
        <Button>
            <BiMenu/>
        </Button>
    </Container>
  )
}

const Container = styled.header`
  height: 70px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background: #fff;
  box-shadow: ${setBoxShadow()};
`;

const Logo = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  color: #333;
`;

const Gnb = styled.div`
  display: flex;
`;

const Button = styled.div`
  display: none;
  font-size: 24px;
`;

export default Header;