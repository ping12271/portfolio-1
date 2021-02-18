import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import appData from "../../../data";

const Template = ({children}) => {

  return (
    <Container>
        <Header/>
            {children}
        <Footer copyrights={appData.footer.copyrights}/>
    </Container>
  )
}


const Container = styled.div`

`;

export default Template;