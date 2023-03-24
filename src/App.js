import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
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
import DataFetching from "./components/hooks/useEffect-hook/DataFetching";
import DataFetchingID from "./components/hooks/useEffect-hook/DataFetchingID";
import ComponentC from "./components/hooks/useContext-hook/ComponentC";
import CounterOne from "./components/hooks/useReducer-hook/CounterOne";
import CounterTwo from "./components/hooks/useReducer-hook/CounterTwo";
import CounterThree from "./components/hooks/useReducer-hook/CounterThree";
import UseReducerWithObject from "./components/hooks/useReducer-hook/UseReducerWithObject";
import DataFetchingOne from "./components/hooks/useReducer-hook/DataFetchingOne";
import DataFetchingTwo from "./components/hooks/useReducer-hook/DataFetchingTwo";
import CallbackParent from "./components/hooks/useCallback-hook/CallbackParent";

// Inline styling - add styling to the element itself
// External styles - importing some classes from a file, and targetting the elements by class

const NavItems = [
  "Movies",
  "Wishlist",
  "Genres",
  "New Movie",
  "UseState Hook",
  "UseEffect Hook",
  "Context API and Hook",
  "UseReducer Hook",
  "UseCallback Hook",
];

//Create context api we can use under class or functional component both
export const UserContext = React.createContext(); //with the help of export we cn use this in any comp
export const AllUserData = React.createContext();

const App = () => {
  const title = "React on Movies!";

  const [selectedSection, setSelectedSection] = useState("Movies");
  const [userData, setUserData] = useState([]); //1
  const [currentStateName, setCurrentStateName] = useState("Geet Thawani");

  const updateNavItem = (value) => {
    setSelectedSection(value);
  };

  const sortItems = (order) => {
    console.log("Order by", order);
    //return; //data
  };

  const updateStateName = () => {
    setTimeout(() => {
      // setCurrentStateName({name:'Priyanka, EKta, Raghu...'});
      setCurrentStateName("Priyanka, EKta, Raghu...");
    }, 1000);
  };

  useEffect(() => {
    //1
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //get request return promise.
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header title={title} currentPage={selectedSection} />
      <div className="main-content">
        <SideNav items={NavItems} update={updateNavItem} />
        <div>
          {/* <Sort updateOrder={sortItems} /> */}
          {selectedSection === "Movies" && <MoviesList />}
          {selectedSection === "Wishlist" && <Wishlist />}
          {selectedSection === "UseState Hook" && <ClassCounter />}
          {selectedSection === "UseState Hook" && <HookCounter />}
          {selectedSection === "UseState Hook" && <HooksRef />}
          {selectedSection === "UseState Hook" && <ClassCounterTwo />}
          {selectedSection === "UseState Hook" && <HookCounterTwo />}
          {selectedSection === "UseState Hook" && <HookCounterThree />}
          {selectedSection === "UseState Hook" && <HookCounterFour />}
          {selectedSection === "UseEffect Hook" && <ClassCounterOne />}
          {selectedSection === "UseEffect Hook" && <HookCounterOne />}
          {/* {selectedSection === "UseEffect Hook" && <ClassMouse />} */}
          {/* {selectedSection === "UseEffect Hook" && <HookMouse />}  */}
          {/* // need to show unmount so include this under MouseContainer comp */}
          {selectedSection === "UseEffect Hook" && <MouseContainer />}
          {selectedSection === "UseEffect Hook" && <IntervalClassCounter />}
          {selectedSection === "UseEffect Hook" && <IntervalHookCounter />}
          {selectedSection === "UseEffect Hook" && <DataFetching />}
          {selectedSection === "UseEffect Hook" && <DataFetchingID />}
          {/* <UserContext.Provider value = {{currentStateName, updateStateName}} > you can write like this too */}
          <UserContext.Provider
            value={{
              curentState: currentStateName,
              updateState: updateStateName,
            }}
          >
            {/* {selectedSection === "Context API and Hook" && <ComponentC />} */}
            <AllUserData.Provider value={userData}>
              {selectedSection === "Context API and Hook" && <ComponentC />}
            </AllUserData.Provider>
          </UserContext.Provider>
          {selectedSection === "UseReducer Hook" && <DataFetchingTwo />}
          {selectedSection === "UseCallback Hook" && <CallbackParent />}
        </div>
      </div>
    </div>
  );
};

export default App;
