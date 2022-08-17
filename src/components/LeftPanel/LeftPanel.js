import React, { useState, useEffect } from "react";
import {
  WithIcon,
  Container,
  SearchContainer,
  AddContainer,
  Input,
  SearchIcon,
  ListContainer,
  NewGroupLink,
} from "./LeftPanel.elements.js";
import { nanoid } from "nanoid";

import logo from "../../logo.png";
import { BsFillFlagFill, BsListUl } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LeftPanel = () => {
  const [listOfFriend, setListOfFriend] = useState([]);
  const [friendName, setFriendName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const HandleFriendNameEvent = (e) => {
    setFriendName(e.target.value);
  };
  const HandleListOfFriend = () => {
    const Friend = {
      id: nanoid(),
      name: friendName,
    };
    setListOfFriend([...listOfFriend, Friend]);
  };
  useEffect(() => {
    localStorage.setItem("listOfFriend", JSON.stringify(listOfFriend));
  });
  return (
    <Container>
      <WithIcon style={{ marginTop: "12%" }}>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Dashboard
      </WithIcon>
      <WithIcon style={{ marginTop: "2%" }}>
        <BsFillFlagFill
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Recent Activity
      </WithIcon>
      <SearchContainer>
        <form>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <Input type="text" placeholder="Search.."></Input>
        </form>
      </SearchContainer>
      <WithIcon style={{ marginTop: "2%" }}>
        <BsListUl width="30" height="30" className="d-inline-block align-top" />{" "}
        All Expense
      </WithIcon>
      <AddContainer>
        <span>FRIENDS</span>
        <span onClick={handleShow}> Add+</span>
      </AddContainer>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
            {" "}
            <WithIcon style={{ marginLeft: "1%" }}>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Invite Friends
            </WithIcon>
          
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter names or email addresses"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Include an optional message"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Send Invite and add friends
          </Button>
        </Modal.Footer>
      </Modal>
      <ListContainer>
        <p>Hiding accounts settled for more than 30 days.Show</p>
      </ListContainer>
      <AddContainer>
        <span>GROUPS</span>
        <NewGroupLink to="/new">Add+</NewGroupLink>
      </AddContainer>
      <ListContainer>
        <p>Hiding accounts settled for more than 30 days.Show</p>
      </ListContainer>
    </Container>
  );
};

export default LeftPanel;
