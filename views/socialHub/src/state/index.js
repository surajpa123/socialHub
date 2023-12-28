import {createSlice} from "@reduxjs/toolkit"

const intialState = {

    mode:"light",
    user:null,
    token:null,
    posts:[]

}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mode = state.mode == "light" ? "dark" : "light"
        },
        setLogin : (state,action) =>{
           state.user = action.payload.user;
           state.token = action.payload.token; 
        },
        setLogin : (state) =>{
            state.user = null;
            state.token = null; 
         },
         
    }
})