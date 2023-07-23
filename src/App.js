/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import "./css/main.css";
import { Container } from "react-bootstrap";
import { data } from "./Data";
//component files
import NavBar from "./components/_navBar";
import BackGround from "./_backGround";
import Category from "./components/category";
import MenuCard from "./components/_menuCard";
import Header from "./components/_header.jsx";

const App = () => {
  const [itemData, setItemData] = useState(data);

  const categorization = ["all", ...new Set(data.map((i) => i.category))];

  const filtration = (cat) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    if (cat === "all") {
      setItemData(data);
    } else {
      const Arr = data.filter((i) => {
        return i.category === cat;
      });
      setItemData(Arr);
    }
  };

  const searchFilter = (word) => {
    if (word !== "") {
      const Arr = data.filter((i) => i.name === word);
      setItemData(Arr);
      console.log(Arr);
    } else null;
  };

  return (
    <div>
      <BackGround />
      <NavBar searchFilter={searchFilter} />
      <Container>
        <Header />
        {/* <Category filtration={filtration} categorization={categorization} /> */}
        <MenuCard itemData={itemData} />
      </Container>
    </div>
  );
};

export default App;
