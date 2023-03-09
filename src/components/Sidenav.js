const SideNav = ({ items, update }) => {
  return (
    <div>
      {items.map((navItem) => {
        return (
          <div
            onClick={() => {
              update(navItem);
            }}
          >
            {navItem}
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
