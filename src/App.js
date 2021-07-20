import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "../src/components/sidebar/Sidebar";
import Feed from "../src/components/feed/Feed";
import Widgets from "../src/components/widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
