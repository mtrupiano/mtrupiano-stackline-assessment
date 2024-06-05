import { configureStore } from '@reduxjs/toolkit';

import productReducer from './features/product/productSlice';

export const makeStore = () => {
  return configureStore({
    reducer: productReducer
  });
};

export type RootState = {
  product: {
    title: string,
    subtitle: string,
    image: string,
    retailer: string,
    brand: string,
    id: string,
    reviews: [
      {
        customer: string,
        review: string,
        score: number,
      }
    ],
    details: string[],
    tags: string[],
    sales: [
      {
        weekEnding: string,
        retailSales: number,
        wholesaleSales: number,
        unitsSold: number,
        retailerMargin: number,
      }
    ]
  },
  loading: boolean,
} 

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch'];