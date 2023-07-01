import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Link } from '@/../i18n'
import { useContext, useEffect, useRef, useState } from 'react';
import { PopperPlacementType } from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import { Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledLogo } from '../../../../../main/utils/customStyle';
import { I18nContext } from 'next-i18next'
import { MenuElem } from '../../../domain/entities/menuEntity';
import React from "react";
import menuData from '@/app/blog/data/prebuild/data.json'
import LanguageSwitcher from './LanguageSwitcher';
import { useTheme } from "@mui/material/styles";


export default function HeaderLayout(props: any) {
  const theme = useTheme();

  const { i18n: { language } } = useContext(I18nContext);

  const menu = menuData.filter(function (item) {
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

  const anchorRef: any = useRef(null);
  const { drawerOpen } = state;

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: any) {
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
    setState((prevState: any) => ({ ...prevState, drawerOpen: true }));

  const handleDrawerClose = () =>
    setState((prevState: any) => ({ ...prevState, drawerOpen: false }));

  const handleClick = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const [anchor, setAnchor] = useState(null);
  const [selected, setSelected] = useState(-1);
  const onMenuItemClick = (event, index) => {
    setAnchor(null);
    setSelected(index);
  };
  const displayDesktop = (menu: any) => {
    const imageUrl = "/logo.svg";
    return (
      <>
        <Box sx={{ display: 'flex', padding:1,justifyContent: 'space-between', alignItems: 'center', height: 80, bgcolor: theme.palette.neutral.main, color: theme.palette.secondary.contrastText }}>
          <StyledLogo src={imageUrl} alt='logo' />
          <Box sx={{ display: 'flex' }}>
            {(menu == undefined) ? (
              <h1>Loading menus</h1>
            ) :
              (
                menu != undefined) && (menu[0].attributes.menu[0].Menu.map((item: MenuElem, index) => {
                  return (
                    <MenuItem key={item.title} onClick={(event) => onMenuItemClick(event, index)}
                      selected={index === selected} >
                      <Link href={item.url} key={item.title}><Typography sx={{ minWidth: 100 }}>{item.title}</Typography></Link>
                    </MenuItem>
                  );
                }))}
          </Box>
          <LanguageSwitcher />
        </Box>
      </>);
  };

  const displayMobile = (menu: any) => {
    const imageUrl = "/logo.svg";

    return (
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', height: 80, bgcolor: theme.palette.neutral.main, color: theme.palette.secondary.contrastText }}>
        <Box>
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

            <MenuList sx={{ bgcolor: theme.palette.thirdly.main, height: '100%' }}>
              {(menu == undefined) ? (
                <h1>Loading menus</h1>
              ) : (
                menu[0].attributes.menu[0].Menu.map((item: MenuElem, index) => {
                  return (
                    <MenuItem
                      key={item.title} onClick={(event) => onMenuItemClick(event, index)}
                      selected={index === selected}>
                      <Link href={item.url} key={item.title}><Typography sx={{ minWidth: 100 }}>{item.title}</Typography></Link>
                    </MenuItem>
                  );
                }))}
            </MenuList>
          </Drawer>


          <StyledLogo src={imageUrl} alt='logo' />
        </Box>
        <LanguageSwitcher />

      </Toolbar>
    );
  };


  return (
    <AppBar position="fixed" color="primary">
      {menu == undefined ? (
        <h1>Loading</h1>
      ) : (
        mobileView ? displayMobile(menu) : displayDesktop(menu))
      }

    </AppBar>
  );
}
