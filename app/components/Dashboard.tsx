import React from "react";
import SideBar from "./SideBar";

interface DashboardProps {
  id: string;
}

const Dashboard: React.FC<DashboardProps> = ({ id }) => {
  return <SideBar id={id} />
};

export default Dashboard;
