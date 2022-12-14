import { useAccordionButton, Accordion, Card } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('λκΈ'),
  );

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Example() {
  return (
    <Accordion>
      <Card>
        {/* <Card.Header> */}
          <CustomToggle className='delrepB'>μμ </CustomToggle>
        {/* </Card.Header> */}
        <Accordion.Collapse>
          <input type="text"></input>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Example;