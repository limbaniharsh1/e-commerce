import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../Redux/Cart/Action";

const Cart = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let {cart} = useSelector((store)=>store)
  const handleCheckout=()=>{
    navigate('/checkout?step=2')
  }
  useEffect(() => {
    dispatch(get())
  }, [])
  console.log(cart)
  
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItem.map((item)=><CartItem item={item}/>)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">price details</p>
            <hr/>
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>discount</span>
                <span className="text-green-600">-₹{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>delivery charge</span>
                <span className="text-green-600">free</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>total amount</span>
                <span className="text-green-600">₹{cart.cart?.totalPrice}</span>
              </div>
            </div>
            <Button onClick={()=>handleCheckout()} variant="contained" className="w-full mt-5" sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>
              chechout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
