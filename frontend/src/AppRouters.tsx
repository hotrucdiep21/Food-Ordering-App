import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from './layouts/layout'

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout children={"Home page"} />} />
      <Route path="/user-profile" element={<span>User-profile-page</span>} />
      <Route path="*" element={<Navigate to=""/>} />
      //Cho URL do not exist
      <Route path="/" element={<span>HOME PAGE</span>} /> 
    </Routes>
  )
}

export default AppRouters
