const SideNav = ({ items, update }) => {
  return (
    <div>
      {items.map((navItem) => {
        return (
          <div
            key={navItem}
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
