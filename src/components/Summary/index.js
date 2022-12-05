import { Grid } from "@mui/material";
import React from "react";
import LighChart from "../Chart/LighChart";

export default function Summary({ report }) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} xs={12}>
        <LighChart data={report} />
      </Grid>

      <Grid item sm={4} xs={12}></Grid>
    </Grid>
  );
}
