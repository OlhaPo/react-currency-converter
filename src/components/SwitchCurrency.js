import React from "react";
import { Button, Grid } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const SwitchCurrency = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);
  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Grid item xs={12} md={2}>
      <Button
        onClick={handleSwitch}
        sx={{ borderRadius: "4px", height: "100%" }}
      >
        <SwapHorizIcon sx={{ fontSize: "30px" }} />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
