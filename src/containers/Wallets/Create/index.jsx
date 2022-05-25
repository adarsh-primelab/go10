import { Form, Input } from 'antd'
import React from 'react'
import { AddWallet } from '../../../services/Wallets';

export default function CreateWallet({ onClose }) {
  const [form] = Form.useForm();
  const { isLoading, mutateAsync: addWallet } = AddWallet()

  const onFinish = (values) => {
    console.log(values);
    addWallet()
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
        name="account"
        label="Account Id"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="walletsId"
        label="Wallets Id"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}
