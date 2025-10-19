import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Landing } from "./pages/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
