import React, {useState} from "react";
import styled from "styled-components";
import FormMessage from "../Message/FormMessage";

const FormGroup = ({placeholder}) => {

    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value)
    }
    console.log('@@', placeholder, value)
  return (
    <Container>
        <Label>
            <Input type="text"
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
            />
        </Label>
        <FormMessage/>
    </Container>
  )
}

const Container = styled.div`

`;

const Label = styled.label`
  display: block;
  height: 56px;
  border: 1px solid #eee;
  border-radius: 4px;

`;

const Input = styled.input`
  padding: 8px;
  display: block;
  width: 100%;
  height: 100%;
  ::placeholder {
    opacity: .5;
  }
`;

export default FormGroup;