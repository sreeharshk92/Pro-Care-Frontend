import React from 'react'
import { Calendar, Clock, Package2, Wallet } from "lucide-react"
import { Link } from 'react-router-dom'

import { Button } from 'bootstrap'

const Test = () => {
  return (
    <>
      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
      <div>
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-blue-900">
          <Wallet className="h-5 w-5" />
          Payment Method
        </h3>
        <div>
        <div defaultValue="cod" className="grid gap-4 md:grid-cols-3">
          <div htmlFor="cod" className="flex cursor-pointer items-center justify-between rounded-lg border border-blue-200 bg-white p-4 hover:bg-blue-50">
            <div className="flex items-center gap-2">
              <div value="cod" id="cod" />
              <span>Cash on Delivery</span>
            </div>
          </div>
          <div htmlFor="gpay" className="flex cursor-pointer items-center justify-between rounded-lg border border-blue-200 bg-white p-4 hover:bg-blue-50">
            <div className="flex items-center gap-2">
              <div value="gpay" id="gpay" />
              <span>Google Pay</span>
            </div>
          </div>
          <div htmlFor="card" className="flex cursor-pointer items-center justify-between rounded-lg border border-blue-200 bg-white p-4 hover:bg-blue-50" >
            <div className="flex items-center gap-2">
              <div value="card" id="card" />
              <span>Card Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
        <Link href="/services">
          <Button variant="outline" className="w-full sm:w-auto">Back to Services</Button>
        </Link>
        <Button  className="w-full bg-blue-900 hover:bg-blue-800 sm:w-auto">Confirm Booking</Button>
      </div>
  
</div>
</div>
</div>
    </>
  )
}

export default Test
