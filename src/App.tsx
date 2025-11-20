import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { LandingPage } from "./pages/landing";
import { LogInPage } from "./pages/log-in";
import { SignUpPage } from "./pages/sign-up";
import { ForgotPasswordPage } from "./pages/forgot-password";
import { ResetPasswordPage } from "./pages/reset-password";
import { DashboardPage } from "./pages/dashboard";
import { AppLayout } from "./layout/app";
import { InvitePage } from "./pages/invite";
import { MarketplacePage } from "./pages/marketplace";
import { MetricsPage } from "./pages/metrics";
import { ProfilePage } from "./pages/profile";
import { LevelUpgradePage } from "./pages/level-upgrade";
import { ChangePasswordPage } from "./pages/change-password";
import { BuyPWBPage } from "./pages/buy-pwb";

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
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  { path: "/reset-password/:token", element: <ResetPasswordPage /> },
  {
    path: "/dashboard",
    element: (
      <AppLayout title="Dashboard">
        <DashboardPage />
      </AppLayout>
    ),
  },
  {
    path: "/invite",
    element: (
      <AppLayout title="Invite">
        <InvitePage />
      </AppLayout>
    ),
  },
  {
    path: "/marketplace",
    element: (
      <AppLayout title="Marketplace">
        <MarketplacePage />
      </AppLayout>
    ),
  },
  {
    path: "/metrics",
    element: (
      <AppLayout title="Metrics">
        <MetricsPage />
      </AppLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <AppLayout title="Profile">
        <ProfilePage />
      </AppLayout>
    ),
  },

  {
    path: "/level-upgrade",
    element: (
      <AppLayout title="Level Upgrade" backPath="/dashboard">
        <LevelUpgradePage />
      </AppLayout>
    ),
  },
  {
    path: "/change-password",
    element: (
      <AppLayout title="Change Password" backPath="/profile">
        <ChangePasswordPage />
      </AppLayout>
    ),
  },
  {
    path: "/buy-pwb",
    element: (
      <AppLayout title="Buy PWB" backPath="/marketplace">
        <BuyPWBPage />
      </AppLayout>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
