import "./style.css";
import React, { useState } from "react";
import AppTable from "../../components/Table";
import ContentHeader from "../../components/ContentHeader";
import { Button, Drawer, Space } from "antd";
import CreateTransaction from "./Create";
import { GetTransactions } from "../../services/Transactions";

export default function Transactions() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Format",
      dataIndex: "format",
    },
    {
      title: "Transactions",
      dataIndex: "transactions",
    },
    {
      title: "Total Received",
      dataIndex: "totalReceived",
    },
    {
      title: "Total Sent",
      dataIndex: "totalSent",
    },
    {
      title: "Final Balance",
      dataIndex: "finalBalance",
    },
  ];
  const { data, isLoading } = GetTransactions();

  return (
    <div>
      <ContentHeader onRefresh onAddButton={showDrawer} />
      <AppTable columns={columns} data={data} isLoading={isLoading} />
      <Drawer
        title="Create Transaction"
        placement={"right"}
        width={700}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button type="link" onClick={onClose}>
              Cancel
            </Button>
            <Button type="primary" onClick={onClose}>
              Submit
            </Button>
          </Space>
        }
      >
        <CreateTransaction />
      </Drawer>
    </div>
  );
}
