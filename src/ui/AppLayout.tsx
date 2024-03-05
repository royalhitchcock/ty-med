import React from "react";
import Navigation from "../features/navigation/Navigation";
import Footer from "../features/footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { sizing } from '@mui/system';


export default function AppLayout() {
  return (
    <div style={{height: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
      <Box>
        <Navigation />
      </Box >
        <main style={{alignContent: 'center', justifyContent:'center'}}>    
            <Outlet />
        </main>
      <Box >
        <Footer />
      </Box>
    </div>
  )
}