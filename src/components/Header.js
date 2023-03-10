import React, { useEffect, useState } from "react";

const Header = ({ title, currentPage }) => {
  const [time, setTime] = useState(new Date());
  const [title1, setTitle] = useState("");

  useEffect(() => {
    console.log("Mounted first time");
  }, []);

  useEffect(() => {
    console.log("Update state");
  });

  useEffect(() => {
    console.log("Update ONLY time");
  }, [time]); // Dependencies, updates only when these are updated

  useEffect(() => {
    console.log("Update ONLY title");
  }, [title1]);
  const getDateandTime = () => {
    return <div>{time.toString()}</div>;
  };

  const updateTime = () => {
    setTime(new Date());
  };

  return (
    <div className="header">
      {title} / {currentPage}
      {getDateandTime()}
      <button
        onClick={() => {
          updateTime();
        }}
      >
        Update time
      </button>
      <button
        onClick={() => {
          setTitle("React new movie");
        }}
      >
        Update title
      </button>
    </div>
  );
};

// Class based Header component

// class Header extends React.Component {
//   // Step 1 - render
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date(),
//     };
//   }

//   //   static getDerivedStatefromProps() {
//   // // return {time: new Date() +1}
//   //   }

//   updateTitle() {
//     console.log(this.state);
//     this.setState({ title: "My new title" });
//   }

//   componentDidMount() {
//     console.log("Did mount");
//   }

//   componentDidUpdate() {
//     console.log("Did update");
//   }

//   componentWillUnmount() {
//     console.log("Did unmount");
//   }

//   // Step 2 - render
//   render() {
//     const { title, currentPage } = this.props;

//     return (
//       <div className="header">
//         {title} / {currentPage}
//         <button
//           onClick={() => {
//             this.updateTitle();
//           }}
//         >
//           Update
//         </button>
//       </div>
//     );
//   }
// }

export default Header;
