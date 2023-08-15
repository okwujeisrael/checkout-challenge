import styled, { css } from "styled-components";
import { FC } from "react";

const Input: FC<{ marginBottom: string }> = ({ marginBottom }) => {
  return (
    <InputWrapper marginBottom={marginBottom}>
      <StyledInput placeholder="input" type="text" />
      <ValidationError>This is an error</ValidationError>
    </InputWrapper>
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 5px;
  border: 2px solid #b4b4ca;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

interface InputWrapperInterface {
  marginBottom: string;
}

const InputWrapper = styled.div<InputWrapperInterface>`
  margin-bottom: 1.2rem;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `}
`;

const ValidationError = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  color: red;
  font-size: 0.75rem;
`;
