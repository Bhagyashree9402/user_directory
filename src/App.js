import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import EmpDirectory from "./components/EmpDirectory";
import Header from "./components/Header";
import Search from "./components/Search";

function App() { 
  const [search, setSearch] = useState({
    name: "",
  });

  const empSearch = (e) => {
    setSearch({ ...search, name: e.target.value });
  };
  return (
    <div className="App">
     <Header/>
     <Search empSearch={empSearch}/>
    </div>
  );
}

export default App;
