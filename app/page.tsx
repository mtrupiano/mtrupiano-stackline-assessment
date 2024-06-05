"use client"

import { useEffect } from "react";
import Image from "next/image";
import { Grid, Skeleton, Stack } from "@mui/material";

import ProductInfoCard from "./components/ProductInfoCard"
import SalesTableCard from "./components/SalesTableCard";
import SalesGraphCard from "./components/SalesGraphCard";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loadProductData } from "@/lib/features/product/productSlice"; 

export default function Home() {

  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.loading);

  // load data from API on page load
  async function getData() {
    const res = await fetch("/api/get");
    const data = await res.json();
    dispatch(loadProductData(data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid 
      container
      spacing={3}
      sx={{
        paddingY: {
          md: 8,
        },
        paddingX: {
          md: 4,
          sm: 2,
        }
      }}
    >
      <Grid item xl={3} lg={2}>
        {loading ? 
          <Skeleton variant="rounded" width={375} height={100} /> : <ProductInfoCard />}
      </Grid>

      <Grid item xl={9} lg={10}>
        <Stack spacing={3} width="100%">
          {loading ? (
            <>
              <Skeleton variant="rounded" />
              <Skeleton variant="rounded" />
            </>
          ) : (
            <>
              <SalesGraphCard />
              <SalesTableCard />
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
