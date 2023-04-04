import React from "react";
import { Button, Grid } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const SwitchCurrency = () => {
  return (
    <Grid item xs={12} md="auto">
      <Button sx={{ borderRadius: "4px", height: "100%" }}>
        <SwapHorizIcon sx={{ fontSize: "30px" }} />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
