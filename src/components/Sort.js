const sortingItems = ["Title", "Release Date", "Rating"];

const Sort = ({ updateOrder }) => {
  return (
    <div>
      <select onChange={updateOrder}>
        {sortingItems.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Sort;
