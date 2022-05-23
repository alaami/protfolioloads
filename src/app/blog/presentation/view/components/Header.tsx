import { useState, useEffect } from "react";
import Nav from "./nav";
import NavMobile from "./navMobile";
import AppBar from '@mui/material/AppBar';
  
  export default function Header() {
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const displayDesktop = () => {
      return (
        <Nav/>
      );
    };
  
    const displayMobile = () => {
        return (
            <NavMobile/>
          );
    };
  
    return (
      <AppBar position="static">
          {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    );
  }