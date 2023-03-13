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
// import ClassCounterTwo from "./components/hooks/ClassCounterTwo";
// import HookCounterTwo from "./components/hooks/HookCounterTwo";
// import HookCounterThree from "./components/hooks/HookCounterThree";
// import HookCounterFour from "./components/hooks/HookCounterFour";

// Inline styling - add styling to the element itself
// External styles - importing some classes from a file, and targetting the elements by class

const NavItems = ["Movies", "Wishlist", "Genres", "New Movie", "Hooks"];

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
          {selectedSection === "Hooks" && <ClassCounter />}
          {selectedSection === "Hooks" && <HookCounter />}
          {selectedSection === "Hooks" && <HooksRef />}
{/*           
          {selectedSection === "Hooks" && <HooksRef />}
          {selectedSection === "Hooks" && <ClassCounterTwo />}
          {selectedSection === "Hooks" && <HookCounterTwo />}
          {selectedSection === "Hooks" && <HookCounterThree />}
          {selectedSection === "Hooks" && <HookCounterFour />} */}
        </div>
      </div>
    </div>
  );
};

export default App;
