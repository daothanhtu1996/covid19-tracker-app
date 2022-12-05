import {  Grid  } from "@mui/material";
import React from "react";
import HighlightCard from "./HighlightCard";

export default function Highlight({report}) {
    const data = report && report.length ? report[report.length-1]:[];
   
    const summary =[
        {
            title:'so ca nhiem',
            count:data.Confirmed,
            type:'confirmed'
        },
        {
            title:'so ca khoi',
            count:data.Recovered,
            type:'recovered'
        },
        {
            title:'so ca tu',
            count:data.Deaths,
            type:'death'
        }
    ]
    console.log('data',data)
  return (
    <Grid container spacing={3}>
    {summary.map((item) => (
      <Grid item sm={4} xs={12}>
        <HighlightCard
          title={item.title}
          count={item.count}
          type={item.type}
        />
      </Grid>
    ))}
  </Grid>
  );
}
