import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color:white;
  width: 35%;
  height: 100%;
`;

export const SearchContainer = styled.div`
  margin-left: 65%;
  width: 40%;
  display: flex;
  flex-direction: column;
  /* border: solid 1px blue; */
  padding: 5px;
`;
export const Input = styled.input`
  width: 60%;
  height: 30%;
  border-radius: 5%;
  border: 1px solid #bebebe;
  &:hover {
    border: 1px solid #808080;
  }
`;
export const SearchIcon = styled.button`
  font-size: 95%;
  border: 1px solid #bebebe;
  border-radius: 8%;
  color: #bebebe;
  &:hover {
    border: 1px solid #808080;
  }
`;

export const WithIcon = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");
  font-family: "Archivo Black", sans-serif;
  margin-left: 65%;
  font-size: 120%;
  font-weight: 500;
  color: #bebebe;
  &:hover {
    color: #808080;
  }
`;
export const AddContainer = styled.div`
  margin-top:2%;
  margin-left: 65%;
  width: 35%;
  display: flex;
  background-color: #d3d3d3;
  flex-direction: row;
  justify-content: space-between;
  font-size: 80%;
  padding: 5px;
  font-weight: 500;
  color: #bebebe;
  &:hover {
    color: #808080;
  }
`;

export const NewGroupLink = styled(Link)`
color:bebebe`

export const ListContainer = styled.div`
  margin-top:2%;
  margin-left: 65%;
  padding:1% ;
  width: 35%;
  color: #bebebe;
  font-size: 80%;
  &:hover {
    background-color: #d3d3d3;
  }
`;
