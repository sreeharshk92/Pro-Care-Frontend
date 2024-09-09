import React from 'react'

function SuperAdminCard({ title, children}) {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  )
}

export default SuperAdminCard
