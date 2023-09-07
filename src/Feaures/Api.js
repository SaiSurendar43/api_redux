import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getuser = createAsyncThunk('gets/getUsers',async ()=>{
       return axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
         return res.data
       })
})

const userslice = createSlice({

     name:'users',
     initialState:{
         users:[],
         loading:false
     },
     
     extraReducers: {
         
           [getuser.pending]: (state,action)=>
           {
              state.loading = true
           },

           [getuser.fulfilled]: (state,action)=>
           {
                state.loading = false
                state.users = action.payload
           },

           [getuser.rejected] : (state,action)=>
           {
               state.loading = false
           }
     }

})

export default userslice.reducer
