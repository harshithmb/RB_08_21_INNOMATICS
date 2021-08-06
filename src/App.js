import React, { Fragment } from "react"; //imr
import { Navbar as OwnNavbar, SubNavbar } from "./components/Topbar";
import { users } from "./utils/mockData";
import "./App.css";
import Card from "./components/Card";
//import OwnName from "./default"
//sfc

const App = () => {
  return (
    <>
      <OwnNavbar />
      <SubNavbar />
      {users.length &&
        users.map(({ avatar_url, login }) => (
          <Card login={login} avatar={avatar_url} />
        ))}
    </>
  );
};

export default App;

// let obj = { login: "Login", avatar: "...." };
// Card(obj);

// function example(obj) {
//   return obj.name + obj.age;
// }

// example({ name: "abc", age: 123 });
