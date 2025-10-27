import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { LandingPage } from "./pages/landing";
import { LogInPage } from "./pages/log-in";
import { SignUpPage } from "./pages/sign-up";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/log-in",
    element: <LogInPage />,
  },
  { path: "sign-up", element: <SignUpPage /> },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
