import React from "react";
import { MainLayout } from "../Layout/MainLayout";
import SuperAdminProfile from "./SuperAdminProfile";
import SectionAdminProfile from "./SectionAdminProfile";

const Dashboard = () => {
  return (
    <div>
      <section>
        <SuperAdminProfile></SuperAdminProfile>
      </section>
      <section>
        <SectionAdminProfile></SectionAdminProfile>
      </section>
    </div>
  );
};

export default Dashboard;
