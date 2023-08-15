import { AppWrapper } from "../src/components/AppWrapper.styles";
import { Container } from "../src/components/Container.styles";
import Form from "./components/Form";
const App = () => {
  return (
    <AppWrapper>
      <Container>
        <Form />
      </Container>
    </AppWrapper>
  );
};

export default App;
