const sortingItems = ["Title", "Release Date", "Rating"];

const selectStyle = {
  width: "40%",
  height: "2rem",
  fontSize: "1rem",
  fontWeight: "bold",
};

const Sort = ({ updateOrder }) => {
  return (
    <div>
      <select style={selectStyle} onChange={updateOrder}>
        {sortingItems.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Sort;
