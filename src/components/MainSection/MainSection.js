import React from "react";
import { MainContainer, Heading } from "./MainSection.element.js";
import { Button } from "react-bootstrap";

function MainSection() {
  return (
    <MainContainer>
      <Heading>
        <h3>Dashboard</h3>
        <div>
          <Button variant="warning">Add Expense</Button>{" "}
          <Button variant="warning">Settle Up</Button>{" "}
        </div>
      </Heading>
    </MainContainer>
  );
}

export default MainSection;
