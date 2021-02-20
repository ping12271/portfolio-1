import React from "react";
import styled from "styled-components";
import appData from "../../../data";
import FormGroup from "../Form/FormGroup";

const FormList = () => {

  return (
    <Container>
        <Row>
            {
                appData.contact.contents.map((item, i) => (
                    <Col key={i} rate={item.rate}>
                        <FormGroup {...item}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const Col = styled.div`
  width: ${props => props.rate * 100}%;
  padding: 15px;
`;

export default FormList;