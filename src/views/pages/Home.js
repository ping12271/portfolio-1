import React from "react";
import styled from "styled-components";
import Visual from "../components/Home/Visual";
import About from "../components/Home/About";
import Works from "../components/Home/Works";
import Skills from "../components/Home/Skills";
import Contact from "../components/Home/Contact";
import Images from "../../images";

const Home = () => {

  return (
    <Container>
        <Visual image={Images.bg} title={'portfolio'} />
        <About/>
        <Works/>
        <Skills/>
        <Contact/>
    </Container>
  )
}

const Container = styled.div`

`;

export default Home;