import React from "react";
import styled from "styled-components";

const Visual = ({image, title}) => {

  return (
    <Container image={image}>
        <Content>
            <h1>{title}</h1>
        </Content>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background: #eee url(${props => props.image}) 50% / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  h1 {
    font-size: 40px;
    color: #333;
    font-weight: 500;
    white-space: pre-wrap;
    margin-bottom: 60px;
    text-transform: uppercase;
  }
`;

export default Visual;