import { createSlice } from '@reduxjs/toolkit'

export type InitialStateProp = {
    isLogedIn:boolean,
    value: number
}

export const { actions, reducer }  = createSlice({
  name: 'app',
  initialState: {
    isLogedIn: false,
  },
  reducers: {
    setLogedIn: (state,{payload}) => {      
      if(payload){
        const tokens = {
          address1:'accessToken'
        }
        localStorage.setItem('ajs_user_id','address1')  
        localStorage.setItem('tokens',JSON.stringify(tokens))
      }else{    
        const tokens = JSON.parse(localStorage.getItem('tokens')||"{}")
        if(tokens){
          tokens[localStorage.getItem('ajs_user_id')||""] = ""
        }
        localStorage.setItem('ajs_user_id','')  
        localStorage.setItem('tokens',JSON.stringify(tokens))
      }
      return {
        ...state,
      isLogedIn :payload
      }
    }
  }
})

export const {
  setLogedIn,
} = actions