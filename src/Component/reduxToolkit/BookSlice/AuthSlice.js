import { createSlice } from "@reduxjs/toolkit";

 let authSlice=createSlice({
  name:"auth",
  initialState:{
    userName:"Alaa",
    isLogin:true,
  },
  reducers:{

  }
});

export default authSlice.reducer;