import React from "react";
import AddressCard from "./AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px-20 lg:px-5 py-7">
      <div>
        <h1 className="font-bold text-xl py-7">delivery address </h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1,1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">men slim mid rise black jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>color : pink</span>
                  <span>size : M</span>
                </p>
                <p className="space-x-5">seller : linaria</p>
                <p className="space-x-5">₹1099</p>
              </div>
            </div>
          </Grid>
          <Grid>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorder sx={{ fontSize: "2rem" }} className="px-2" />
              <span>rate & review product</span>
            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
};

export default OrderDetails;
