'use client'

import { Grid, Box, Switch, Slide } from "@mui/material";
import Presentation from "./components/Presentation";
import Etudes from "./components/Etudes";
import Travaux from "./components/Travaux";
import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";
import React from 'react';


export default function Home() {

  const [itemSelected, setItemSelected] = React.useState(0);
  const handleChange = (value: number) => {
    setItemSelected(value)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Sidebar onValueChange={handleChange} />
      </Grid>
      <Grid item xs={10}>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div>
          {itemSelected === 0 && (
            <Presentation />
          )}
          {itemSelected === 1 && (
            <Etudes />
          )}
          {itemSelected === 2 && (
            <Travaux />
          )}
          {itemSelected === 3 && (
            <Experience />
          )}
          </div>
        </Slide>
      </Grid>
    </Grid>

  )
}
