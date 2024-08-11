"use client";
import { useEffect, useState } from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { gridSpacing } from "../components/store/constant";
import Balance from "../components/cards/balance/Balance";
import Sales from "../components/cards/sales/Sales";
import Orders from "../components/cards/orders/Orders";
import Earning from "../components/cards/Earnings/Earning";
import Customers from "../components/cards/customers/Customers";
import Revenue from "../components/cards/revenue/Revenue";
import Chart from "../components/chart/Chart";
import TransactionCard from "../components/cards/Transaction/TransactionCard";
const Page = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid className="mt-2" container spacing={gridSpacing}>
          <Grid item xs={12} sm={6} md={3}>
            <Balance />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Orders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Sales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Earning />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={8}>
                <Chart />
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={6}>
                    <Customers />
                  </Grid>
                  <Grid item xs={6}>
                    <Revenue />
                  </Grid>
                </Grid>
                <TransactionCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Page;
