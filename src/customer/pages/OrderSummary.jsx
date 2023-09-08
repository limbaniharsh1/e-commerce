import React from 'react'
import AddressCard from './AddressCard'
import { Button } from '@mui/material'
import CartItem from './CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard/>
      </div>
      <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">price details</p>
            <hr/>
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>price</span>
                <span>₹2545</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>discount</span>
                <span className="text-green-600">-₹300</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>delivery charge</span>
                <span className="text-green-600">free</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>total amount</span>
                <span className="text-green-600">₹2245</span>
              </div>
            </div>
            <Button variant="contained" className="w-full mt-5" sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>
              chechout
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary
