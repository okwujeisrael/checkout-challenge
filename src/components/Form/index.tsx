import styled from "styled-components";
import { LevelOneHeader } from "../Text.styles";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import { useState } from "react";

type Validate = (componentName: string, value: string | number) => void;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState<Record<string, string>>({});

  const validate: Validate = (componentName, value) => {
    let errorMessage!: string;
    if (value === "") {
      errorMessage = `The ${componentName} field is required`;
      setError((prev) => ({ [componentName]: errorMessage, ...prev }));
    }

    if (
      value &&
      componentName === "email" &&
      !(value as string).includes("@")
    ) {
      errorMessage = "A valid email is required";
      setError((prev) => ({ [componentName]: errorMessage, ...prev }));
    }

    if (
      value &&
      componentName === "rating" &&
      ((+value as number) > 5 || (+value as number) < 1)
    ) {
      errorMessage = "Ratings can only be from 1 to 5";
      setError((prev) => ({ [componentName]: errorMessage, ...prev }));
    }
  };

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
    const formValues: Record<string, string> = { name, email, rating, comment };
    Object.keys(formValues).forEach((formValue) => {
      validate(formValue, formValues[formValue]);
    });

    console.log(error);
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
            error={error?.name}
            placeholder="Name"
            value={name}
          />
          <Input
            name="email"
            mb="1.2rem"
            onChange={handleChange}
            error={error?.email}
            placeholder="Email"
            value={email}
          />
          <Input
            name="rating"
            mb="0"
            onChange={handleChange}
            error={error?.rating}
            placeholder="Rating(1-5 stars)"
            value={rating}
          />
        </Wrapper>
        <TextArea
          name="comment"
          onChange={handleChange}
          error={error?.comment}
          placeholder="Comment"
          value={comment}
        />
      </Flex>
      <ButtonWrapper>
        <Button onClick={handleClick}>Submit</Button>
      </ButtonWrapper>
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
