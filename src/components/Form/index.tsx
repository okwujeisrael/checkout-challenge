import styled from "styled-components";
import { LevelOneHeader } from "../Text.styles";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

const Form = () => {
  return (
    <>
      <LevelOneHeader>Feedback Form</LevelOneHeader>
      <Flex>
        <Wrapper>
          <Input marginBottom="1.2rem" />
          <Input marginBottom="1.2rem" />
          <Input marginBottom="0" />
        </Wrapper>
        <TextArea />
      </Flex>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <Button type="button">Submit</Button>
      </div>
    </>
  );
};

export default Form;

const Wrapper = styled.div`
  width: 40%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
