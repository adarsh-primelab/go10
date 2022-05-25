import { WalletOutlined, DashboardOutlined, BlockOutlined, NodeExpandOutlined , TransactionOutlined} from '@ant-design/icons';

export const menus = [
  {
    key: 'Dashboard',
    path: '/',
    icon: <DashboardOutlined /> ,
    label: 'Dashboard',
  },
  {
    key: 'Blockchain',
    path: '/blockchain',
    icon: <BlockOutlined />,
    label: 'Blockchain',
  },
  {
    key: 'Nodes',
    path: '/nodes',
    icon: <NodeExpandOutlined />,
    label: 'Nodes',
  },
  {
    key: 'Transactions',
    path: '/transactions',
    icon: <TransactionOutlined />,
    label: 'Transactions',
  },
  {
    key: 'Wallets',
    path: '/wallets',
    icon: <WalletOutlined />,
    label: 'Wallets',
  }
] 