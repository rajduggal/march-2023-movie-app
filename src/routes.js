import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import MoviesList, { loader as moviesLoader} from "./components/Movies";
import Wishlist, {action as wishListAction} from "./components/Wishlist";
import MainContainer from './components/mainContainer';
import ClassCounter from "./components/hooks/ClassCounter";
import HookCounter from "./components/hooks/HookCounter";
import HooksRef from "./components/hooks/Hooks";
import ClassCounterTwo from "./components/hooks/ClassCounterTwo";
import HookCounterTwo from "./components/hooks/HookCounterTwo";
import HookCounterThree from "./components/hooks/HookCounterThree";
import HookCounterFour from "./components/hooks/HookCounterFour";
import ClassCounterOne from "./components/hooks/useEffect-hook/ClassCounterOne";
import HookCounterOne from "./components/hooks/useEffect-hook/HookCounterOne";
import MouseContainer from "./components/hooks/useEffect-hook/MouseContainer";
import IntervalClassCounter from "./components/hooks/useEffect-hook/IntervalClassCounter";
import IntervalHookCounter from "./components/hooks/useEffect-hook/IntervalHookCounter";
import DataFetching from "./components/hooks/useEffect-hook/DataFetching";
import DataFetchingID from "./components/hooks/useEffect-hook/DataFetchingID";
import ErrorPage from "./components/ErrorPage";
import FetcherExample from "./components/hooks/useFetcher-hook";

const routerLinks = createBrowserRouter([
    {
        path: "/", //root route
        element: <MainContainer />, 
        errorElement: <ErrorPage />,
        children: [
              {
                index: true, 
                element: <Home />,
              },
              {
                  path: "Movies",
                  loader: moviesLoader,
                 // errorElement: <ErrorPage/>,
                  element: <MoviesList />,
              },
              {
                  path: "Wishlist",
                  action: wishListAction,
                  element: <Wishlist />,
              },
              {
                path: "Wishlist/:id",
                element: <Wishlist />,
              },
              {
                path: "UseStateHooks",
                element: <ClassCounter />,
              },    
              {
                path: "UseStateHooksDemo1",
                element: <HookCounter />,
              },
              {
                path: "UseStateHooksDemo2",
                element: <HooksRef />,
              },
              {
                path: "UseStateHooksDemo3",
                element: <ClassCounterTwo />,
              }, 
              {
                path: "UseStateHooksDemo4",
                element: <HookCounterTwo />,
              },  
              {
                path: "UseStateHooksDemo5",
                element: <HookCounterThree />,
              },
              {
                path: "UseStateHooksDemo6",
                element: <HookCounterFour />,
              },
              {
                path: "UseEffectHookDemo1",
                element: <ClassCounterOne />,
              },
              {
                path: "UseEffectHookDemo2",
                element: <HookCounterOne />,
              },
              {
                path: "UseEffectHookDemo3",
                element: <MouseContainer />,
              },
              {
                path: "UseEffectHookDemo4",
                element: <IntervalClassCounter />,
              },
              {
                path: "UseEffectHookDemo5",
                element: <IntervalHookCounter />,
              },
              {
                path: "UseEffectHookDemo6",
                element: <DataFetching />,
              },
              {
                path: "UseEffectHookDemo7",
                element: <DataFetchingID />,
              },
              {
                path: "UseFetcherDemo",
                element: <FetcherExample />,
              }
        ]
    }
  ]);

export default routerLinks;