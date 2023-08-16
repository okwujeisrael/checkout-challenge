import { AppWrapper } from "../src/components/AppWrapper.styles";
import { Container } from "../src/components/Container.styles";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <AppWrapper>
      <Container>{showForm ? <Form /> : <Results />}</Container>
    </AppWrapper>
  );
};

export default App;
