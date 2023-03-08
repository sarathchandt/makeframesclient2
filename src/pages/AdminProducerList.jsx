import React from 'react'
import SideBar from '../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../components/Home/AdminHeader'
import Producer from '../components/AdminProducerList/AdminProducerList'

function AdminProducerList() {
  return (
    <div className='relative'>
    <div className='fixed top-0 left-0 right-0'>
    <AdminHeader  />
    </div>
    <SideBar/>
    <Producer/>
    </div>
  )
}

export default AdminProducerList