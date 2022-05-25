
import './style.css'
import React, { useState } from 'react'
import { Col, Row, Drawer, Space, Button, Typography, Badge } from 'antd'
import ContentHeader from '../../components/ContentHeader';
import servericon from '../../images/serverIcon.png'
import { GetNodes } from '../../services/Nodes';

const { Text } = Typography;

const statusIndicator = {
  Processing: "processing",
  Success: "success",
  Error: "error",
  Warning: "warning",
  Default: "default"
}

const statusTextIndicator = {
  Processing: "secondary",
  Success: "success",
  Error: "danger",
  Warning: "warning",
  Default: ""
}


export default function Nodes() {
  const [visible, setVisible] = useState(false);
  const [selectedBlock, setselectedBlock] = useState(null);

  const showDrawer = (block) => {
    setVisible(true);
    setselectedBlock(block)
  };

  const onClose = () => {
    setVisible(false);
    setselectedBlock(null)
  };

  const { data: nodes, isLoading } = GetNodes()

  return (
    <div className='nodes'>
      <ContentHeader onRefresh />
      <Row gutter={[20, 20]}>
        {
          !isLoading && nodes && nodes.length > 0 && nodes.map(block => <Col key={block.id} span={4}>
            <div className='block' onClick={() => showDrawer(block)} >
              <div>
                <img src={servericon} />
              </div>

              <Space direction="vertical">
                <Text >{block.name} <Badge status={statusIndicator[block.status]} className='status' /></Text>
              </Space>
            </div>
          </Col>)
        }
      </Row>
      <Drawer
        title="Block Infomation"
        placement={"right"}
        width={700}
        onClose={onClose}
        visible={visible}
        extra={
          <Space >
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Id :-{selectedBlock?.id}</p>
        <p>Name :-{selectedBlock?.name}</p>
        <p>IP Address :-{selectedBlock?.ip}</p>
        <p>Status :-  <Text type={statusTextIndicator[selectedBlock?.status]}>{selectedBlock?.status}</Text> </p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}
