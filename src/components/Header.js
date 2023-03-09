const Header = ({ title, currentPage }) => {
  return (
    <div className="header">
      {title} / {currentPage}
    </div>
  );
};

export default Header;
