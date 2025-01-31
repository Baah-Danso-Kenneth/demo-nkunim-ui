import React from 'react'
import DashboardTopConent from './DashboardConent'
import DashboardBaseConent from './DashboardBaseConent'
import DashboardTransactionContent from './DashboardTransactionContent'
import { ProtectedRoute } from '@/lib/ProtectedRoute'

function Dashboard() {
  return (
    <ProtectedRoute>
        <DashboardTopConent/>
        <DashboardBaseConent/>
        <DashboardTransactionContent/>
    </ProtectedRoute>
  )
}

export default Dashboard