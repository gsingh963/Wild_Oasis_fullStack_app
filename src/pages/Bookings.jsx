import Heading from "../ui/Heading";
import Row from "../ui/Row";

// In Styled Components, the as prop is used to dynamically change the HTML element rendered by a styled component. This can be particularly useful when you want to reuse a styled component but with a different HTML tag.

function Bookings() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Bookings;
