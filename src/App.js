import logo from "./logo.svg";
import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SideNav from "./components/Sidenav";
import MoviesList from "./components/Movies";
import Sort from "./components/Sort";

// Inline styling - add styling to the element itself
// External styles - importing some classes from a file, and targetting the elements by class

const NavItems = ["Movies", "Wishlist", "Genres", "New Movie"];

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
          <MoviesList />
        </div>
      </div>
    </div>
  );
};

export default App;
