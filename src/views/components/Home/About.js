import React from "react";
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import appData from '../../../data';
import List from "../List";
import InfoItem from "../Items/InfoItem";

const About = () => {

    const render = (item) => {
        return <InfoItem {...item}/>
    }

  return (
    <Container>
        <ContentContainer>
            <SectionTitle title={appData.about.title} description={appData.about.description} />
            <Contents>
                <List data={appData.about.contents}
                    render={render}
                />
            </Contents>
        </ContentContainer>
    </Container>
  )
}

const Container = styled(SectionContainer)`

`;

const Contents = styled.div`

`;

export default About;