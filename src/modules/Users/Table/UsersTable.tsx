import React, { useMemo } from "react";
import "./UsersTable.scss";
import { columns } from "./UsersTableColumns";
import { Table } from "antd";
import { useGetUsers } from "../../../services/users";
import { useNavigate } from "react-router-dom";

export const UsersTable = () => {
  const { users, isLoading } = useGetUsers();
  const navigate = useNavigate();

  const listColumns = useMemo(() => {
    return columns();
  }, []);

  return (
    <Table
      className={"users-table"}
      columns={listColumns}
      pagination={{
        position: ["bottomCenter"],
        pageSize: 4,
        showSizeChanger: false,
      }}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate(`/users/${record.id}`);
          },
        };
      }}
      loading={isLoading}
      dataSource={users}
      locale={{ emptyText: "No users found" }}
    />
  );
};
