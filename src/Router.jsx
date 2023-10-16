import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Spinach from "./Components/Spinach";
import Popeye from "./Components/Popeye";
import DefaultProfile from "./DefaultProfile";

const Router = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />
        },
        {
          path: "/profile",
          element: <Profile />,
          children: [
            { index: true, element: <DefaultProfile />},
            {path: "spinach", element:<Spinach />},
            {path: "popeye", element: <Popeye />},
          ],
        },
      ]);

  return <RouterProvider router={router} />;
};
export default Router;