import "./style.css";
import { Layout, Menu } from "antd";
import { menus } from "../../constants/menus";
import { useNavigate } from "react-router-dom";
import logoIcon from "../../images/logo.png";

const { Sider } = Layout;

export default function AppSidebar({ collapsed, menu, setMenu }) {
  const navigate = useNavigate();

  return (
    <Sider trigger={null} theme="light" collapsible collapsed={collapsed}>
      <div className="logo">
        <img src={logoIcon} alt="logo" />
      </div>
      <Menu
        theme="light"
        mode="inline"
        onSelect={(evt) => navigate(evt.item.props.path)}
        activeKey={menu}
        items={menus}
      />
    </Sider>
  );
}
