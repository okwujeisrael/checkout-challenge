import styled from "styled-components";
import { LevelOneHeader } from "../Text.styles";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import { FC, useState } from "react";

interface FormInterface {
  setResults: (results: Record<string, string | number>[]) => void;
  setShowForm: (showForm: boolean) => void;
}

const Form: FC<FormInterface> = ({ setResults, setShowForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const componentName = e.target.name;
    const value = e.target.value;

    if (componentName === "name") {
      setName(value);
    }

    if (componentName === "email") {
      setEmail(value);
    }

    if (componentName === "rating") {
      setRating(value);
    }

    if (componentName === "comment") {
      setComment(value);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const formValues: Record<string, string | number> = {
      name,
      email,
      rating: +rating,
      comment,
    };
    const hasEmptyFields = Object.values(formValues).includes("");
    setHasError(hasEmptyFields);

    if (!hasEmptyFields) {
      // @ts-ignore
      setResults((prev) => [...prev, formValues]);
      setShowForm(false);
    }
  };

  return (
    <>
      <LevelOneHeader>Feedback Form</LevelOneHeader>
      <Flex>
        <Wrapper>
          <Input
            name="name"
            mb="1.2rem"
            onChange={handleChange}
            placeholder="Name"
            value={name}
          />
          <Input
            name="email"
            mb="1.2rem"
            onChange={handleChange}
            placeholder="Email"
            value={email}
          />
          <Input
            name="rating"
            mb="0"
            onChange={handleChange}
            placeholder="Rating(1-5 stars)"
            value={rating}
          />
        </Wrapper>
        <TextArea
          name="comment"
          onChange={handleChange}
          placeholder="Comment"
          value={comment}
        />
      </Flex>
      <ButtonWrapper>
        <Button onClick={handleClick}>Submit</Button>
      </ButtonWrapper>
      {hasError && <ValidationError>All fields are required.</ValidationError>}
    </>
  );
};

export default Form;

const Wrapper = styled.div`
  width: 40%;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;
`;

const ValidationError = styled.p`
  color: red;
`;
