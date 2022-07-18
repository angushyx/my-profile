import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Footer from "./common/components/Footer/Footer";
// import Navigation from "./common/components/Navigation/Navigation";
// import CampaignBanner from "./pages/Misc/CampaignBanner";
// import { LoadingSpinner } from "./common/components/UIElements/loadingAnimations";

const Home = lazy(() => import("./pages/Home/Home"));

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
];

// function App() {
//   const element = useRoutes(routeConfig);

//   return <>{element}</>;
// }
const App = () => {
  const element = useRoutes(routeConfig);
  return (
    <>
      {element}
      <Footer />
    </>
  );
};

export default App;
