import "./style.css";
import React, { useState } from "react";
import { Col, Row, Drawer, Space, Button, Typography, Badge } from "antd";
import ContentHeader from "../../components/ContentHeader";
import { GetBlockchains } from "../../services/Blockchain";

const { Text } = Typography;

const statusIndicator = {
  Processing: "processing",
  Success: "success",
  Error: "error",
  Warning: "warning",
  Default: "default",
};

const statusTextIndicator = {
  Processing: "secondary",
  Success: "success",
  Error: "danger",
  Warning: "warning",
  Default: "",
};

export default function Blockchain() {
  const [visible, setVisible] = useState(false);
  const [selectedBlock, setselectedBlock] = useState(null);

  const showDrawer = (block) => {
    setVisible(true);
    setselectedBlock(block);
  };

  const onClose = () => {
    setVisible(false);
    setselectedBlock(null);
  };
  const { data: blocks, isLoading } = GetBlockchains();
  return (
    <div className="blockchain">
      <ContentHeader onRefresh />
      <Row gutter={[20, 20]}>
        {!isLoading &&
          blocks &&
          blocks.length > 0 &&
          blocks.map((block) => (
            <Col key={block.id} span={4}>
              <div className="block" onClick={() => showDrawer(block)}>
                <Badge
                  status={statusIndicator[block.status]}
                  className="status"
                />
                <Space direction="vertical">
                  <Text className="blockId">{block.id}</Text>
                </Space>
              </div>
            </Col>
          ))}
      </Row>
      <Drawer
        title="Block Infomation"
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
              OK
            </Button>
          </Space>
        }
      >
        <p>Id :-{selectedBlock?.id}</p>
        <p>
          Status :-{" "}
          <Text type={statusTextIndicator[selectedBlock?.status]}>
            {selectedBlock?.status}
          </Text>{" "}
        </p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
