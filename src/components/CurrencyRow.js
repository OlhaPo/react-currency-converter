import React, { useContext } from "react";
import { Grid, TextField, InputAdornment } from "@mui/material";
import { CurrencyContext } from "../context/CurrencyContext";

const CurrencyRow = () => {
  const { firstAmount, setFirstAmount } = useContext(CurrencyContext);

  return (
    <Grid item xs={12}>
      <TextField
        value={firstAmount}
        onChange={(event) => setFirstAmount(event.target.value)}
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
