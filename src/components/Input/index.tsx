import styled, { css } from "styled-components";
import React, { FC } from "react";

interface InputInterface {
  mb: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  value: string;
}

const Input: FC<InputInterface> = ({
  mb,
  onChange,
  name,
  placeholder,
  value,
}) => {
  return (
    <InputWrapper mb={mb}>
      <StyledInput
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        name={name}
        value={value}
      />
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
  mb: string;
}

const InputWrapper = styled.div<InputWrapperInterface>`
  margin-bottom: 1.2rem;

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}

  @media only screen and (max-width: 500px) {
    margin-bottom: 2rem;
  }
`;
