import React from "react";
import logo from "./logo.svg";
import NewBookmark from "./components/NewBookmark";
import SavedBookmarks from "./components/SavedBookmarks";
import { Container, Button, Col, Row } from "react-bootstrap";
function App() {
  return (
    <Container>
      <Row className="mb-2">
        <NewBookmark />
      </Row>
      <Row>
        <SavedBookmarks />
      </Row>
    </Container>
  );
}

export default App;
