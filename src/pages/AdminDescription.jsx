import React from 'react'
import SideBar from '../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../components/Home/AdminHeader'
import AdminDesc from '../components/AdminDescription/AdminDescription'
function AdminDescription() {
  return (
    <div className='relative'>
    <div className='fixed top-0 left-0 right-0'>
    <AdminHeader  />
    </div>
    <SideBar/>
    <AdminDesc/>
    </div>
  )
}

export default AdminDescription