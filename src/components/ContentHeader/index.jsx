import './style.css'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { ReloadOutlined, PlusOutlined } from '@ant-design/icons';

export default function ContentHeader({ onAddButton, onRefresh }) {
  const [isLoading, setIsLoading] = useState(false)
  const handelClick = () => {
    setIsLoading(true)
  }
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [isLoading])
  return (
    <div className='contentHeader'>
        {onAddButton && <Button type="primary"
        icon={<PlusOutlined />}
        onClick={onAddButton}
      >
        Add
      </Button>}
      {onRefresh && <Button type="primary"
        icon={<ReloadOutlined />}
        loading={isLoading}
        onClick={handelClick}
      >
        Refresh
      </Button>}
    
    </div>
  )
}
