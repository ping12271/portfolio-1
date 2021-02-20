import React from "react";
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import appData from "../../../data";
import SkillItem from "../Items/SkillItem";

const Skills = () => {


    // const render = (item) => {
    //     return <SkillItem {...item}/>
    // }

  return (
    <Container>
        <ContentContainer>
            <SectionTitle title={appData.skills.title} description={appData.skills.description} />
            {
                appData.skills.contents.map((item, index)=> {
                    return <SkillItem title={item.title} value={item.value}/>
                })
            }
        </ContentContainer>
    </Container>
  )
}

const Container = styled(SectionContainer)`

`;

export default Skills;