import React from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";

const SelectCurrency = ({ value, setValue, label, currencies }) => {
  return (
    <Grid item xs={12} md={5}>
      <Autocomplete
        freeSolo
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={currencies ?? []}
        getOptionLabel={(item) => (item ? `${item.code} - ${item.name}` : "")}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCurrency;
