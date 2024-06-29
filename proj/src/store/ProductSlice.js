import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UseDispatch } from 'react-redux';


export const getProducts = createAsyncThunk('product/getProducts', async (_, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:3009/topFurniture');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const Bestsales = createAsyncThunk('product/Bestsales', async (_, thunkAPI) => {
  const res = await fetch('http://localhost:3009/Bestsales');
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});



const productSlice = createSlice({
  name: 'product',
  initialState: { products: null , bestsales: null,
    productData:[],
    userInfo:null,
  
  },
  reducers:{
            addtoCart:(state,action) => {
              const item = state.productData.find((item) => item.id === action.payload.id);
              if(item)
                {
                  item.quantity += action.payload.quantity;
                }
                else{
                  state.productData.push(action.payload);
                }
       
     }, 
     deleteItem:(state,action) => {
      state.productData= state.productData.filter((item) => item.id !== action.payload)

     },
     resetcart:(state) => {
      state.productData = []

     },
     increamentQuantity:(state,action) => {
      const item = state.productData.find((item) => 
        item.id === action.payload.id
      
    );
    if (item)
      {
        item.quantity++
      }

     },
     DecrementtQuantity:(state,action) => {
      const item = state.productData.find((item) => 
        item.id === action.payload.id
      
    );
    if (item.quantity === 1)
      {
        item.quantity = 1
      }
      else {
        item.quantity--
      }

     },
     //user
     adduser:(state,action) => {
      state.userInfo=action.payload
     },
     deleteuser:(state) => {
state.userInfo= null;

     }
  },

 

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        
        state.products =action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        
      })
      //best
      .addCase(Bestsales.pending, (state, action) => {
        
      })
      .addCase(Bestsales.fulfilled, (state, action) => {
        
        state.bestsales =action.payload
      })
      .addCase(Bestsales.rejected, (state, action) => {
        
      });
  },
});
export const {addtoCart,deleteItem,resetcart,DecrementtQuantity,increamentQuantity,adduser,deleteuser} = productSlice.actions;
export default productSlice.reducer;

