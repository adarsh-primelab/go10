import "./style.css";
import React, { useState } from "react";
import AppTable from "../../components/Table";
import ContentHeader from "../../components/ContentHeader";
import { Button, Drawer, Space } from "antd";
import CreateWallet from "./Create";
import { GetWallets } from "../../services/Wallets";

export default function Wallets() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { data, isLoading } = GetWallets();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Account Id",
      dataIndex: "accountId",
    },

    {
      title: "Wallets ID",
      dataIndex: "walletsId",
    },
  ];

  return (
    <div>
      <ContentHeader onRefresh onAddButton={showDrawer} />
      <AppTable columns={columns} data={data} isLoading={isLoading} />
      <Drawer
        title="Create Wallet"
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
        <CreateWallet />
      </Drawer>
    </div>
  );
}
