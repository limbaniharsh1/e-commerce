import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/Auth/Action';

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const {auth} = useSelector(store=>store)
    // const jwt = localStorage

    // useEffect(() => {
    //   if(jwt){
    //     dispatch(getUser(jwt))
    //   }
    // }, [jwt,auth.jwt])

    const hanleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const userData = {
          email: data.get("email"),
          password: data.get("password"),
        };
        dispatch(login(userData))
      };
      return (
        <div>
          <form onSubmit={hanleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="email"
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="password"
                  fullWidth
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="bg-[#9155fd] w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: ".8rem 0", bgcolor: "#9155fd" }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
            <p>if you dont't have an account ?</p>
            <Button onClick={()=>navigate("/register")} className="ml-5" size="small">register</Button>
        </div>
      </div>
        </div>
      );
}

export default LoginForm
