import React from "react";
import styled from "styled-components";

const FormMessage = ({message}) => {

    if(!message) return null;

  return (
    <Container>
        {message}
    </Container>
  )
}

const Container = styled.div`

`;

export default FormMessage;