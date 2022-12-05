import { Card, CardContent, Typography } from "@mui/material";

import React from "react";

export default function HighlightCard({ title, count, type }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" component="p">
          {title}
        </Typography>
        <Typography variant="body2" component="span">
          {count}
          {/* <CountUp end={count} separator=' ' duration={2} /> */}
        </Typography>
      </CardContent>
    </Card>
  );
}
