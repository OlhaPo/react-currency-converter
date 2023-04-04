import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import CurrencyRow from "./components/CurrencyRow";
import SelectCountry from "./components/SelectCountry";
import SwitchCurrency from "./components/SwitchCurrency";

function App() {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" mt={6}>
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
