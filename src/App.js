import React from "react";
//Components
//import OwnName from "./path"
import { Navbar, SubNavbar } from "./components/Topbar"; // named export and
//Mock Data
import { users } from "./utils/mockData";
//CSS
import "./App.css";

const App = () => {
  console.log("USERS", users);
  // 0 undefined null On false ""
  const styles = { borderBottom: "1px solid", color: "red" }; // internal Styles
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <div className="cards-container">
        {users.length &&
          users.map((item) => (
            <div className="card">
              <img src={item.avatar_url} className="card-image" />
              <h1 style={styles}>{item.login}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
