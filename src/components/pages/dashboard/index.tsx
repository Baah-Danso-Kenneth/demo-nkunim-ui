import React from 'react'
import DashboardTopConent from './DashboardConent'
import DashboardBaseConent from './DashboardBaseConent'
import DashboardTransactionContent from './DashboardTransactionContent'


function Dashboard() {
  return (
    <div>
        <DashboardTopConent/>
        <DashboardBaseConent/>
        <DashboardTransactionContent/>
    </div>
  )
}

export default Dashboard