import React from 'react'

import AdminView from '../../components/View/AdminView'
import { Complaints } from '../../CreateViews/Complaints/Complaints'
import { Header } from '../../components/Header/Header'

export const Complaint = () => {
  return (
    <AdminView >
        <Header />
        <Complaints />
    </AdminView>
  )
}
