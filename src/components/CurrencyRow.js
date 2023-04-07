import React, { useContext } from "react";
import { Grid, TextField, InputAdornment } from "@mui/material";
import { CurrencyContext } from "../context/CurrencyContext";

const CurrencyRow = () => {
  const { firstAmount, setFirstAmount } = useContext(CurrencyContext);

  return (
    <Grid item xs={12} md={12}>
      <TextField
        sx={{ marginBottom: "15px" }}
        value={firstAmount}
        onChange={(event) => setFirstAmount(event.target.value)}
        fullWidth
        label="Amount"
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      ></TextField>
    </Grid>
  );
};

export default CurrencyRow;
