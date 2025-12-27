import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "../Dashboard/Dashboard";
import { MainLayout } from "../Layout/MainLayout";
import SuperAdmin from "../components/SuperAdmin/SuperAdmin";
import SuperAdminEditInfo from "../components/SuperAdmin/SuperAdminEditInfo";
import ChangePassword from "../components/SuperAdmin/ChangedPassword";
import ForgotPassword from "../components/SuperAdmin/ForgotPassword";
import SectionAdmin from "../components/SectionAdmin/SectionAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard"} />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/super-admin",
        element: <SuperAdmin />,
      },
      {
        path: "/edit-profile",
        element: <SuperAdminEditInfo />,
        },
        {
        path: "/changed-password",
        element: <ChangePassword />,
        },
        {
        path: "/forgot-password",
        element: <ForgotPassword />,
        },
        {
        path: "/section-admin",
        element: <SectionAdmin />,
      },
    ],
  },
]);

export default router;
