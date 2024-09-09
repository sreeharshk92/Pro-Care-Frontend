import React from 'react'

import SuperAdminSidebar from './Superadminsidebar'
import SuperAdminHeader from './Superadminheader'
import SuperAdminDashboard from './Superadmindashboard'

function SuperAdminHome() {
  return (
    <div className="flex">
      <SuperAdminSidebar />
      <div className="flex-1 flex flex-col">
        <SuperAdminHeader />
        <main className="flex-1 bg-gray-100 p-6">
          <SuperAdminDashboard />
        </main>
      </div>
    </div>
  )
}

export default SuperAdminHome
