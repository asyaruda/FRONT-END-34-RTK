import { useDispatch } from 'react-redux'
import { useLang } from '../../../hooks/languageContext'
import { Button, Space, } from 'antd'
import { Link } from 'react-router-dom'
import { removeItem } from '../store/thunks'
import React from 'react'

export function useColumns () {
  const dispatch = useDispatch()
  const lang = useLang()

  return [
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/waiter/edit/${record.id}`}><Button>{lang === 'en' ? 'Edit' : 'Редагувати'}</Button></Link>
          <Button onClick={() => dispatch(removeItem(record.id))}>{lang === 'en' ? 'Delete' : 'Видалити'}</Button>
        </Space>
      ),    
    },
  ];
}


