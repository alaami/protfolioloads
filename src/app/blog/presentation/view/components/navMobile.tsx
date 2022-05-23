
import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Drawer, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Categories from '../category/categoriesView';



const NavMobile= () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  
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
        
        <MenuList>
        <MenuItem
            component={Link}
            // the 'to' prop (and any other props not recognized by MenuItem itself)
            // will be passed down to the Link component
            to="/about"
            >
                About
            </MenuItem>
            <MenuItem
            component={Link}
            // the 'to' prop (and any other props not recognized by MenuItem itself)
            // will be passed down to the Link component
            to="/profile"
            >
                Portfolio
            </MenuItem>
            <MenuItem
            component={Link}
            // the 'to' prop (and any other props not recognized by MenuItem itself)
            // will be passed down to the Link component
            to="/contact"
            >
            Contact
            </MenuItem>
            </MenuList>
            
            <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleClick('bottom-start')}
            >
            Blog
            </Button>
            <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open}  onKeyDown={handleListKeyDown} dense>
                      <Categories/>
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>
          
      </Drawer>

      <div>        <ul className="uk-navbar-nav">
            <li>
             <Link to="/">Strapi Blog</Link>
            </li>
        </ul> </div>
    </Toolbar>
  );
    
}
export default NavMobile;