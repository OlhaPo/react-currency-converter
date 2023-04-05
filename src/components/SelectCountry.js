import React from "react";
import { Autocomplete, Skeleton, Grid, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

const SelectCountry = ({ value, setValue, label }) => {
  const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");

  if (loaded) {
    return (
      <Grid item xs={12} md={4}>
        <Skeleton rounded height={60} />
      </Grid>
    );
  }

  if (error) {
    return "Something went wrong!";
  }

  const dataFilter = data.filter((item) => "currencies" in item);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });

  return (
    <Grid item xs={12} md={4}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
