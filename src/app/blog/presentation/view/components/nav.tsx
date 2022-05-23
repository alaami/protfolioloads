
import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Box  from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Categories from '../category/categoriesView';

const Nav= () => {
    const [open, setOpen] = useState(false);
    const anchorRef: any= useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
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
    
return (<>
<Box sx={{display: 'flex' }}>
        <Box sx={{ width: '50%'}}>
        <ul className="uk-navbar-nav">
            <li>
             <Link to="/">Strapi Blog</Link>
            </li>
        </ul>  
        </Box>
        <Box sx={{ display: 'flex'}}>
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
            <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            >
            Blog
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                       <Categories/>
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>
            <MenuItem
            component={Link}
            // the 'to' prop (and any other props not recognized by MenuItem itself)
            // will be passed down to the Link component
            to="/contact"
            >
            Contact
            </MenuItem>
            </Box>
            </Box>
        
        
      </>);
}
export default Nav;