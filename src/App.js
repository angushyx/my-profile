import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes,
} from "react-router-dom";

// import Navigation from "./common/components/Navigation/Navigation";
// import Footer from "./common/components/Footer/Footer";
// import CampaignBanner from "./pages/Misc/CampaignBanner";
// import { LoadingSpinner } from "./common/components/UIElements/loadingAnimations";

const Home = lazy(() => import("./pages/Home/Home"));

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
];

const App = () => {
  const element = useRoutes(routeConfig);
  return <>{element}</>;
};

export default App;
