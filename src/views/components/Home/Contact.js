import React from "react";
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import appData from "../../../data";
import FormList from "../List/FormList";

const Contact = () => {

  return (
    <Container>
        <ContentContainer>
            <SectionTitle title={appData.contact.title} description={appData.contact.description} />
            <FormList data={appData.contact.contents}/>
        </ContentContainer>
    </Container>
  )
}

const Container = styled(SectionContainer)`

`;

export default Contact;