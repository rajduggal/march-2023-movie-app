import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/Wishlist");
  };

  return (
    <div className="mainContent">
      Welcome to the Dashboard, Happy Learning !!
      <div>
        <button onClick={onClickHandler}>Go to Wishlisht</button>
      </div>
      {/* {true && (
        <Navigate to="/Wishlist" replace={true} />
      )} */}
    </div>
  );
};

export default Home;
