import React from "react";
import { Grid, TextField, InputAdornment } from "@mui/material";

const CurrencyRow = () => {
  return (
    <Grid item>
      <TextField
        fullWidth
        label="Amount"
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        helperText="Enter amount you want to convert"
      ></TextField>
    </Grid>
  );
};

export default CurrencyRow;
