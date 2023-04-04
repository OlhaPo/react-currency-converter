import React from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

const SelectCountry = () => {
  const [data] = useAxios("https://restcountries.com/v3.1/all");

  const dataFilter = data.filter((item) => "currencies" in item);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });

  return (
    <Grid item xs={12} md={4}>
      <Autocomplete
        value="🇳🇦 NAD - Namibia"
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label="from" />}
      />
    </Grid>
  );
};

export default SelectCountry;
