
import './style.css'
import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography

export default function AppHeader({ collapsed, setCollapsed, menu }) {
  return (
    <Header className="site-layout-background header"  >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <Title className='title' level={4} >{menu} </Title>
    </Header>
  )
}
