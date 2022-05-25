 
import './style.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, 
} from '@ant-design/icons';
const { Header,   } = Layout;


export default function AppHeader() {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  )
}
