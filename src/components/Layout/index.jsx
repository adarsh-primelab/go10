
import './style.css'
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import AppHeader from '../Header';
import AppSidebar from '../Sidebar';
import { useLocation } from 'react-router-dom';
import { menus } from '../../constants/menus';

const { Content } = Layout;
const AppLayout = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState("");
  const route = useLocation()

  useEffect(() => {
    const currentPage = route.pathname
    if (currentPage) {
      let menuKey = ""
      menus.map((item) => {
        if (item.path === currentPage) {
          menuKey = item.key
        }
        return item
      })
      setMenu(menuKey)
    }
  }, [route])


  return (
    <Layout >
      <AppSidebar
        collapsed={collapsed}
        setMenu={setMenu}
        menu={menu}
      />
      <Layout className="site-layout">
        <AppHeader menu={menu} collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className="main" 
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;