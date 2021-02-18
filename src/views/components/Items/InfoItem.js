import React from "react";
import styled from "styled-components";

const InfoItem = ({image, title, description}) => {

  return (
    <Container>
        <img src={image} alt=""/>
        <h3>{title}</h3>
        <p>{description}</p>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 22px;
    color: #333;
    font-weight: 600;
    margin-bottom: 25px;
    text-transform: capitalize;
  }
  p {
    font-size: 14px;
    line-height: 1.5;
    color: #777;
  }
`;

export default InfoItem;