import SideNav from "../components/Sidenav";
import {Outlet, useNavigation} from 'react-router-dom';

const MainContainer = () => {
  const navigate = useNavigation();
    return (
        <>
          <SideNav/>
          {navigate.state === 'loading' && <p>Loading ...</p>}
          <Outlet/>
        </>
    )
}

export default MainContainer;