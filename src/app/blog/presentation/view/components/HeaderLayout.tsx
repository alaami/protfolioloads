import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Box  from '@mui/material/Box';
import { Link } from '@/../i18n'
import { useContext, useEffect, useRef, useState } from 'react';
import  { PopperPlacementType } from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import { Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledLogo } from '../../../../../main/utils/customStyle';
import { I18nContext } from 'next-i18next'
import {MenuElem } from '../../../domain/entities/menuEntity';
import React from "react";
import menuData from '@/app/blog/data/prebuild/data.json'
import LanguageSwitcher from './LanguageSwitcher';
import { useTheme } from "@mui/material/styles";


  export default function HeaderLayout(props:any) {
    const theme = useTheme();

    const { i18n: { language } } = useContext(I18nContext);

    const menu=menuData.filter(function(item){
      return item.attributes.locale == language;         
    });

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

   //Mobile logic
   const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView } = state;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const [open, setOpen] = useState(false);

  const anchorRef: any= useRef(null);
  const { drawerOpen } = state;
  
  const handleClose = (event: any) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
  };
  
  function handleListKeyDown(event:any) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
  }
  
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
      
  
      prevOpen.current = open;
    }, [open]);

  const handleDrawerOpen = () =>
    setState((prevState:any) => ({ ...prevState, drawerOpen: true }));
    
  const handleDrawerClose = () =>
    setState((prevState:any) => ({ ...prevState, drawerOpen: false }));
  
  const handleClick = (newPlacement: PopperPlacementType) => (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
  };

  
    const displayDesktop = (menu:any) => {
      const imageUrl = "/logo-236x100.png";
      return (
<>
    <Box sx={{display: 'flex', height:100 }}>
        <Box sx={{ padding:1,width: '20%'}}>
            <StyledLogo src={imageUrl} alt='logo'/>
        </Box>
        <Box sx={{ display: 'flex' ,width: '60%'}}>
        {(menu==undefined)? (
            <h1>Loading menus</h1>
             ):
        (menu!=undefined)  && ( menu[0].attributes.menu[0].Menu.map((item:MenuElem) => {
            return (
              <MenuItem key={item.title}>
              <Link href={item.url} key={item.title}><Typography sx={{ minWidth: 100 }}>{item.title}</Typography></Link>
              </MenuItem>
/*                 <MenuItem
                component={Link}
                // the 'to' prop (and any other props not recognized by MenuItem itself)
                // will be passed down to the Link component
                href={item.url}
                key={item.title}
                >
                  {item.title}
                </MenuItem> */
            );
          }))}
          </Box>
          <Box sx={{ display: 'flex', alignSelf:'center'}}>
            <Box sx={{ alignSelf:'center'}}>
            <LanguageSwitcher />
            </Box>
            </Box>
            </Box>
            </>);
    };
  
    const displayMobile = (menu:any) => {
      const imageUrl = "/logo-236x100.png";
 
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
    
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
        
          >
            
            <MenuList   sx={{bgcolor: theme.palette.thirdly.main, height:'100%'}}>
            {(menu==undefined)? (
            <h1>Loading menus</h1>
             ):(
            menu[0].attributes.menu[0].Menu.map((item:MenuElem)=> {
            return (
              <MenuItem
               key={item.title}>
              <Link href={item.url} key={item.title}><Typography sx={{ minWidth: 100 }}>{item.title}</Typography></Link>
              </MenuItem>
/*                 <MenuItem
                component={Link}
                // the 'to' prop (and any other props not recognized by MenuItem itself)
                // will be passed down to the Link component
                href={item.url}
                key={item.title}
                >
                    {item.title}
                </MenuItem> */
            );
          }))}
                </MenuList>         
          </Drawer>
    
          <Box sx={{display: 'flex' }}>
        <Box sx={{ marginBottom:0.5, padding:2,width: '100%', height:'80px'}}>
             <img src={imageUrl} alt='logo' />
        </Box>
        <Box sx={{ display: 'flex', alignSelf:'flex-end'}}>
          <LanguageSwitcher />
        </Box>
        </Box>
        </Toolbar>
      );
    };
    
  
    return (
      <AppBar position="fixed" color="primary">
      {menu==undefined ? (
          <h1>Loading</h1>
      ):(
          mobileView ? displayMobile(menu) : displayDesktop(menu))
      }

      </AppBar>
    );
  }
