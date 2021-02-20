import React from "react";
import styled from "styled-components";
import appData from "../../../data";

const FormItem = ({placeText}) => {

    return (
        <Container>
            <Row>
                {
                    appData.contact.contents.map((item, index) => {
                        return <Forms type="text" placeholder={item.placeText}/>
                    })
                }
            </Row>
            <Col>
                {
                    appData.contact.contents.map((item,index) => {
                        return <Form type="text" placeholder={item.placeText}/>
                    })
                }
            </Col>
        </Container>
    )
}

const Container = styled.div`
`;

const Row = styled.div`
  display: flex;
  margin-right: -10px;
`;

const Col = styled.div`
`;

const Forms = styled.input`
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-right: 10px;
  ::placeholder {
    opacity: .5;
  }
`;

const Form = styled.input`
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #eee;
  ::placeholder {
    opacity: .5;
  }
`;




export default FormItem;