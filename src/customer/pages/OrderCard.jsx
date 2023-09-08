import { Adjust, Height } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
  let navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/3`)} className='p-5 shadow-md hover:shadow-2xl border shadow-black'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70" alt="" />
                <div>
                  <p className=''>men slim mid rise black jeans</p>
                  <p className='opacity-50 text-xs font-semibold'>size : M</p>
                  <p className='opacity-50 text-xs font-semibold'>color : black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div>
            <p>
            <Adjust sx={{width:'15px', height:"15px"}} className='text-green-600 text-sm'/>
            <span>Deliverd on march 03</span>
          </p>
          <p className='text-xs'>your item has been delivered</p>
          </div>}
          {false && <p>
            <span>expected delivery on march 03</span>
          </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
