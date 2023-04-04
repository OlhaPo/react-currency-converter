import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import CurrencyRow from "./components/CurrencyRow";
import SelectCountry from "./components/SelectCountry";
import SwitchCurrency from "./components/SwitchCurrency";

function App() {
  const containerStyle = {
    background: "#fcfefe",
    marginTop: "50px",
    textAlign: "center",
    borderRadius: "8px",
    minHeight: "320px",
    padding: "32px 64px",
    boxShadow: "1px 5px 10px rgba(0, 0, 0, 0.3)",
    position: "relative",
  };

  return (
    <Container maxWidth="xs" sx={containerStyle}>
      <Typography variant="h4" mt={6} sx={{ color: "#1976D2" }}>
        Currency Conventer
      </Typography>
      <Grid container mt={6} spacing={2}>
        <CurrencyRow />
        <SelectCountry />
        <SwitchCurrency />
        <SelectCountry />
      </Grid>
    </Container>
  );
}

export default App;