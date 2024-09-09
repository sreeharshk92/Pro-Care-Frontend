import React from 'react'
import SuperAdminCard from './Superadmincard'
function SuperAdminDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Welcome to the Super Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SuperAdminCard title="Users">
          <p>Number of users: 1,234</p>
        </SuperAdminCard>
        <SuperAdminCard title="Revenue">
          <p>Revenue this month: $12,345</p>
        </SuperAdminCard>
        <SuperAdminCard title="Performance">
          <p>Performance: 90%</p>
        </SuperAdminCard>
      </div>
    </div>
  )
}

export default SuperAdminDashboard
