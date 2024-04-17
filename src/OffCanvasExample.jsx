import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

function OffCanvasExample({ icon, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-0">
        {icon}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{icon}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Layout() {
  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd"
       d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
  );

  return (
    <div className="container">
      <nav>
        <ul className="navbar">
          <li>
            <OffCanvasExample icon={icon} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
