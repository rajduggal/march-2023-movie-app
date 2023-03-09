import Label from "./Label";

const ListItems = ({ data }) => {
  return (
    <div>
      {data.split(", ").map((element) => {
        return <Label textValue={element} />;
      })}
    </div>
  );
};

export default ListItems;
