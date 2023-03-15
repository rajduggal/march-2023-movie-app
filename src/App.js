import logo from "./logo.svg";
import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SideNav from "./components/Sidenav";
import MoviesList from "./components/Movies";
import Sort from "./components/Sort";
import Wishlist from "./components/Wishlist";
import HooksRef from "./components/hooks/Hooks";
import ClassCounter from "./components/hooks/ClassCounter";
import HookCounter from "./components/hooks/HookCounter";
import ClassCounterTwo from "./components/hooks/ClassCounterTwo";
import HookCounterTwo from "./components/hooks/HookCounterTwo";
import HookCounterThree from "./components/hooks/HookCounterThree";
import HookCounterFour from "./components/hooks/HookCounterFour";
//importing useEffect comp
import ClassCounterOne from "./components/hooks/useEffect-hook/ClassCounterOne";
import HookCounterOne from "./components/hooks/useEffect-hook/HookCounterOne";
import ClassMouse from "./components/hooks/useEffect-hook/ClassMouse";
import HookMouse from "./components/hooks/useEffect-hook/HookMouse";
import MouseContainer from "./components/hooks/useEffect-hook/MouseContainer";
import IntervalClassCounter from "./components/hooks/useEffect-hook/IntervalClassCounter";
import IntervalHookCounter from "./components/hooks/useEffect-hook/IntervalHookCounter";
// Inline styling - add styling to the element itself
// External styles - importing some classes from a file, and targetting the elements by class

const NavItems = ["Movies", "Wishlist", "Genres", "New Movie", "UseState Hooks", "UseEffect Hooks"];

const App = () => {
  const title = "React on Movies!";

  const [selectedSection, setSelectedSection] = useState("Movies");

  const updateNavItem = (value) => {
    setSelectedSection(value);
  };

  const sortItems = (order) => {
    console.log("Order by", order);
    //return; //data
  };

  return (
    <div className="App">
      <Header title={title} currentPage={selectedSection} />
      <div className="main-content">
        <SideNav items={NavItems} update={updateNavItem} />
        <div>
          <Sort updateOrder={sortItems} />
          {selectedSection === "Movies" && <MoviesList />}
          {selectedSection === "Wishlist" && <Wishlist />}
          {selectedSection === "UseState Hooks" && <ClassCounter />}
          {selectedSection === "UseState Hooks" && <HookCounter />}
          {selectedSection === "UseState Hooks" && <HooksRef />}
          {selectedSection === "UseState Hooks" && <ClassCounterTwo />}
          {selectedSection === "UseState Hooks" && <HookCounterTwo />}
          {selectedSection === "UseState Hooks" && <HookCounterThree />}
          {selectedSection === "UseState Hooks" && <HookCounterFour />}
          {selectedSection === "UseEffect Hooks" && <ClassCounterOne />}
          {selectedSection === "UseEffect Hooks" && <HookCounterOne />}
          {/* {selectedSection === "UseEffect Hooks" && <ClassMouse />} */}
          {/* {selectedSection === "UseEffect Hooks" && <HookMouse />}  */}
          {/* // need to show unmount so include this under MouseContainer comp */}
          {selectedSection === "UseEffect Hooks" && <MouseContainer />}
          {/* {selectedSection === "UseEffect Hooks" && <IntervalClassCounter />} */}
          {selectedSection === "UseEffect Hooks" && <IntervalHookCounter />}
          
        </div>
      </div>
    </div>
  );
};

export default App;
