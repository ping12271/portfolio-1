import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0 4px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: transparent;
  border-radius: 4px;
  min-width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: pink;
`;