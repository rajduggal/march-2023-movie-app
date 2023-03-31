import { Link, NavLink } from "react-router-dom";
import "./SideNav.scss";

const SideNav = () => {
  return (
    <div className="sideNavigation">
      <nav>
        <ul>
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/Movies">Movies List</Link>
          </li>
          <li className="list">
            <Link to="/Wishlist">Wishlist</Link>
          </li>
          <li className="list">
            <Link to="/UseStateHooks">UseState Hooks</Link>
            <nav>
              <ul>
                <li className="list">
                  <Link to="/UseStateHooksDemo1">UseState Hooks Demo 1</Link>
                </li>
                <li className="list">
                  <Link to="/UseStateHooksDemo2">UseState Hooks Demo 2</Link>
                </li>
                <li className="list">
                  <Link to="/UseStateHooksDemo3">UseState Hooks Demo 3</Link>
                </li>
                {/* <li className="list">
                  <Link to="/UseStateHooksDemo4">UseState Hooks Demo 4</Link>
                </li>
                <li className="list">
                  <Link to="/UseStateHooksDemo5">UseState Hooks Demo 5</Link>
                </li>
                <li className="list">
                  <Link to="/UseStateHooksDemo6">UseState Hooks Demo 6</Link>
                </li> */}
              </ul>
            </nav>
          </li>
          <li className="list">
            <Link to="/UseEffectHookDemo1">UseEffect Hooks</Link>
          </li>
          {/* <NavLink
            to="/WishList"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "blue",
              };
            }}>
            Wish List
          </NavLink> */}
          <li>
            <NavLink
              to="/WishList"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Wish List
            </NavLink>
          </li>
          <li>
            <Link
              to="/UseFetcherDemo">
              Use Fetcher
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
// const SideNav = ({ items, update }) => {
//   return (
//     <div>
//       {items.map((navItem) => {
//         return (
//           <div
//             key={navItem}
//             onClick={() => {
//               update(navItem);
//             }}
//           >
//             {navItem}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default SideNav;
