import { AppBar, Box, NativeSelect, Toolbar } from "@mui/material";
import React from "react";

export default function CountrySelector({ value, handleOnChange, countries }) {
  console.log("ddd", countries);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NativeSelect
            value={value}
            onChange={handleOnChange}
            inputProps={{
              name: "country",
              id: "country-selector",
            }}
          >
            {countries.map((country) => {
              return (
                <option value={country.ISO2.toLowerCase()}>
                  {country.Country}
                </option>
              );
            })}
          </NativeSelect>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
