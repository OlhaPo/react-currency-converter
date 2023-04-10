import "./App.css";
import axios from "axios";
import { Box, Container, Grid, Typography } from "@mui/material";
import CurrencyRow from "./components/CurrencyRow";
import SelectCountry from "./components/SelectCurrency";
import SwitchCurrency from "./components/SwitchCurrency";
import { useContext, useState } from "react";
import { CurrencyContext } from "./context/CurrencyContext";
import { useEffect } from "react";

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);

  const [rate, setRate] = useState(0);
  const [hasError, setHasError] = useState(false);

  const codeFromCurrency = parseCurrencyCode(fromCurrency);
  const codeToCurrency = parseCurrencyCode(toCurrency);

  useEffect(() => {
    if (toCurrency && fromCurrency) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: "TDvFkhNzEY3HJLL4Dkyj3fJZTLZQDSyU34ssS29e",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency,
        },
      })
        .then((response) => {
          setHasError(false);
          setRate(response.data.data[codeToCurrency]);
        })
        .catch((error) => {
          setHasError(true);
          console.log(error);
        });
    }
  }, [toCurrency, fromCurrency, codeFromCurrency, codeToCurrency]);

  const containerStyle = {
    marginTop: "50px",
    maxWidth: "500px",
    textAlign: "center",
    borderRadius: "8px",
    padding: "32px 40px 52px 52px",
    boxShadow: "1px 5px 10px rgba(0, 0, 0, 0.3)",
    "@media (max-width:576px)": {
      borderRadius: "none",
      boxShadow: "none",
      maxWidth: "100%",
      padding: "20px",
    },
  };

  const boxStyle = {
    marginTop: "60px",
  };

  return (
    <Container sx={containerStyle}>
      <Typography
        variant="h4"
        mt={2}
        sx={{
          color: "#1976D2",
          "@media (max-width:576px)": {
            fontSize: "25px",
          },
        }}
      >
        Currency Converter
      </Typography>
      <Grid container mt={3} spacing={2}>
        <CurrencyRow />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
        />
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>
      {firstAmount && fromCurrency && toCurrency && !hasError ? (
        <Box sx={boxStyle}>
          <Typography variant="h6">
            {firstAmount} {fromCurrency} ={" "}
          </Typography>
          <Typography variant="h6">
            {Math.round(firstAmount * rate * 100) / 100} {toCurrency}
          </Typography>
        </Box>
      ) : (
        ""
      )}
      {hasError ? (
        <Box>
          <Typography variant="h6" sx={boxStyle}>
            No rate available for this currency
          </Typography>
        </Box>
      ) : null}
    </Container>
  );
}

export default App;

function parseCurrencyCode(val) {
  if (val === null) {
    return "";
  } else {
    return val.split(" ")[1];
  }
}
