import './style.css'
import React from 'react'
import { Card, Col, Row, Skeleton, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Piechart from './PieChart';
import DualBarAxes from './BarChart';

export default function Dashboard() {
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={[20,20]}>
        <Col span={8}>
          <Card hoverable>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={16}>
          <Card hoverable>
            <DualBarAxes />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <Piechart />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <Skeleton active paragraph={{ rows: 6 }} />
          </Card>
        </Col>
        <Col span={16}>
          <Card hoverable>
            <Skeleton active paragraph={{ rows: 6 }} />
          </Card>
        </Col>

      </Row>
    </div>
  )
}





