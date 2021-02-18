import React from "react";
import styled from "styled-components";

const Footer = ({copyrights}) => {

    return (
        <Container>
            <p>{copyrights}</p>
        </Container>
    )
}

const Container = styled.div`
  background: #eee;
  padding: 80px 0;

  p {
    font-size: 14px;
    color: #777;
    text-align: center;
  }
`;

export default Footer;