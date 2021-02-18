import React from "react";
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import appData from "../../../data";
import WorksItem from "../Items/WorksItem";
import List from "../List";

const Works = () => {

    const render = (item) => {
        return <WorksItem {...item}/>
    }

  return (
      <Container>
          <ContentContainer>
              <SectionTitle title={appData.works.title} description={appData.works.description} />
              <List data={appData.works.contents}
                    render={render}
              />
          </ContentContainer>
      </Container>
  )
}

const Container = styled(SectionContainer)`

`;

export default Works;