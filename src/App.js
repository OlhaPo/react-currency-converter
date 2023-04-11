import "./App.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import CurrencyRow from "./components/CurrencyRow";
import SwitchCurrency from "./components/SwitchCurrency";
import { useContext, useState } from "react";
import { CurrencyContext } from "./context/CurrencyContext";
import { useEffect } from "react";
import SelectCurrency from "./components/SelectCurrency";
import { getCurrencyList, getRate } from "./currency_api";

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
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const c = await getCurrencyList();
      setCurrencies(c);
    };
    fetchList();
  }, []);

  useEffect(() => {
    if (toCurrency && fromCurrency) {
      getRate(fromCurrency.code, toCurrency.code)
        .then((r) => {
          setHasError(false);
          setRate(r);
        })
        .catch((errorMsg) => {
          setHasError(true);
          console.error(errorMsg);
        });
    }
  }, [toCurrency, fromCurrency]);

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
        <SelectCurrency
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
          currencies={currencies}
        />
        <SwitchCurrency />
        <SelectCurrency
          value={toCurrency}
          setValue={setToCurrency}
          label="To"
          currencies={currencies}
        />
      </Grid>
      {firstAmount && fromCurrency && toCurrency && !hasError ? (
        <Box sx={boxStyle}>
          <Typography sx={{ fontSize: "22px" }}>
            {firstAmount} {fromCurrency.code} ={" "}
            {(firstAmount * rate).toFixed(2)} {toCurrency.code}
          </Typography>
        </Box>
      ) : (
        ""
      )}
      {hasError ? (
        <Box>
          <Typography variant="h6" sx={boxStyle}>
            Something went wrong. Try again!
          </Typography>
        </Box>
      ) : null}
    </Container>
  );
}

export default App;
