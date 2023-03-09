const genreLabel = {
  background: "yellow",
  padding: "5px",
  borderRadius: "5px",
  border: "1px black solid",
  marginRight: "0.5rem",
};

const Label = ({ textValue }) => {
  return <span style={genreLabel}>{textValue}</span>;
};

export default Label;
