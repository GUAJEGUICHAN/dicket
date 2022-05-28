import { createSlice } from '@reduxjs/toolkit'

export type InitialStateProp = {
  isLogedIn:boolean;
  value: number;
  reservationInfo:reservationInfoProps;
}

export type reservationInfoProps = {
  email:string;
  name:string;
  time:string;
  location:string;
  seat:string;
  price:string;
  priceList:Array<PriceListProps>
}

export type PriceListProps = {
  class: string;
price: string;
seatNumbers: Array<number>
}

export const { actions, reducer }  = createSlice({
  name: 'app',
  initialState: {
    isLogedIn: false,
    reservationInfo:{
      email:'',
      name:'',
      date:'',
      time:'',
      location:'',
      seat:'',
      price:'',
      priceList:[]
    }
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
    },
    setReservationInfo:(state,{payload}) => ({
      ...state,
      reservationInfo:{
        ...state.reservationInfo,
        ...payload
        // [name]:value,
      },
    }),
  }
})

export const {
  setLogedIn,
  setReservationInfo
} = actions