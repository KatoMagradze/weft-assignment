import React from "react";
import "./Users.scss";
import { UsersTable } from "./Table/UsersTable";

export const Users = () => {
  return (
    <div className={"users-page-container"}>
      <UsersTable />
    </div>
  );
};
