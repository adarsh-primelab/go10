import './style.css'
import { Table } from 'antd';

const AppTable = ({ columns, data ,isLoading}) => {
  return <Table
    size="large"
    loading={isLoading}
    pagination={false}
    columns={columns}
    dataSource={data}
  />;
};

export default AppTable;
