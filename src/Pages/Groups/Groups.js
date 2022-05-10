import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Groups.css"

const Groups = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("listOfFriend");
    if (data) {
      setOptions(JSON.parse(data));
    }
console.log(options)
  }, []);
  const SelectFriend=(friend)=>{
    setSearch(friend)
    setDisplay(false)
  }
  return (
    <div className="Form-Container mt-5">
      <div>
      <h6 className="MainTitle">START A NEW GROUP</h6>
      <h4>My Group shall be called...</h4>
      <input className="GroupName" />
      <br></br>
      <h6 className="SubTitle">GROUP MEMBERS</h6>
      <div className="SelectFriends">
        <input
          type="text"
          onClick={() => setDisplay(!display)}
          value={search}
          placeholder="Select Friend"
          onChange={(e)=>setSearch(e.target.value)}
        />
        {display && (
          <div>
            {options.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1).map((v,i) => {
              return (
                <div key={i} onClick={()=>SelectFriend(v.name)}>
                  <span>{v.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Button className="SaveButton">Save</Button>
      </div>
    </div>
  );
};

export default Groups;
