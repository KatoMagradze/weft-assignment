import React from "react";
import { IUser } from "../../../services/users";
import { ColumnsType } from "antd/es/table/interface";

export const columns = (): ColumnsType<IUser> => {
  return [
    {
      title: "Full Name",
      dataIndex: "name",
      render: (_: string, record: IUser) => {
        return <div>{record.name}</div>;
      },
    },
    {
      title: "Email Address",
      dataIndex: "email",
      align: "left",
      render: (_: string, record: IUser) => {
        return <div>{record.email}</div>;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      align: "right",
      render: (_: string, record: IUser) => {
        const { street, suite, city, zipcode } = record.address;
        return <div>{`${street}, ${suite}, ${city}, ${zipcode}`}</div>;
      },
    },
  ];
};
