import { Form, Input } from 'antd'
import React from 'react'
import { AddTransactions } from '../../../services/Transactions';

export default function CreateTransaction({ onClose }) {
  const [form] = Form.useForm();
  const { isLoading, mutateAsync: addTransactions } = AddTransactions()
  const onFinish = (values) => {
    console.log(values);
    addTransactions()
      .then(res => {
        console.log(res);
        onClose()
      })
      .catch(err => {
        console.log(err);
      })
  };
  return (
    <Form layout={"vertical"} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="address"
        label="Address"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="format"
        label="Format"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Transactions"
        label="Transactions"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="totalReceived"
        label="Total Received"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="totalSent"
        label="Total Sent"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="finalBalance"
        label="Final Balance"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

    </Form>
  )
}
