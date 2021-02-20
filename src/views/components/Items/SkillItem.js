import React from "react";
import styled from "styled-components";

const SkillItem = ({title, value}) => {

  return (
    <Container>
        <h4>{title}</h4>
        <ContainerBar>
            <Value value={value}/>
        </ContainerBar>
    </Container>
  )
}

const Container = styled.div`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #eee;
  padding: 15px 20px;
  margin-bottom: 10px;
  h4 {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
    text-transform: uppercase;  
  }
`;

const ContainerBar = styled.div`
  background: #ddd;    
  width: 100%;
  height: 5px;
  border-radius: 3px;
`;

const Value = styled.div`
  width: ${props => props.value};
  background-color: darkred;
  height: 5px;
`;

export default SkillItem;