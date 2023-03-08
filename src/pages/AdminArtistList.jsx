import React from 'react'
import SideBar from '../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../components/Home/AdminHeader'
import Artist from '../components/AdminAertistList/AdminArtistList'
function AdminArtistList() {
  return (
    <div className='relative'>
    <div className='fixed top-0 left-0 right-0'>
    <AdminHeader  />
    </div>
    <SideBar/>
    <Artist/>

    </div>
  )
}

export default AdminArtistList