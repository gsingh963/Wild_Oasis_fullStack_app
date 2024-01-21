import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
const StyledApp = styled.main`
  padding: 20px;
`;

// In Styled Components, the as prop is used to dynamically change the HTML element rendered by a styled component. This can be particularly useful when you want to reuse a styled component but with a different HTML tag.

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button>Check In</Button>
              <Button variation="secondary" size="small">
                Check Out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <Input type="number" placeholder="Number of Guests" />
            <Input type="number" placeholder="Number of Guests" />
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
