import React, { useState } from "react";
import "./sass/main.css";
// import "./app.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/Main";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import DetailedProject from "./Pages/Projects/detailedProject/DetailedProject";

function App() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <BrowserRouter>
        {open ? (
          <Sidebar closeSidebar={toggleSidebar} />
        ) : (
          <Navbar openSidebar={toggleSidebar} />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:slug" component={DetailedProject} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
