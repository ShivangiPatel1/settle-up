import React, { useState, useEffect } from "react";
import "./LeftPanel.css";
import { nanoid } from "nanoid";
import { Button } from "react-bootstrap";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Groups from "../../Pages/Groups/Groups";

const LeftPanel = () => {
  const [listOfFriend, setListOfFriend] = useState([]);
  const [friendName, setFriendName] = useState("");
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
    <div className="LeftPanel">
      <div className="Add-Friend">
        <span className="form-heading">Add Friend</span>
        <input
          className="form-element"
          onChange={(e) => HandleFriendNameEvent(e)}
        ></input>
        <button className="form-element" onClick={() => HandleListOfFriend()}>
          Add Friend
        </button>
      </div>
      <div className="Add-Friend">
        <div className="row">
          <span>Group</span>
          <span>
            <Link to="/new">Add+</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
