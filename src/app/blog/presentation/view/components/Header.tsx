import AppBar from '@mui/material/AppBar';
import { useMenuViewModel } from "../../controller/ViewModel";
import { useMenuStoreImplementation } from "../../../data/repositories/menuStoreImplementation";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box  from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Item } from '../../../domain/entities/menuEntity';
import { useEffect, useRef, useState } from 'react';
import  { PopperPlacementType } from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import { Drawer, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReactCountryFlag from 'react-country-flag';
import { StyledSelect } from '../../../../../main/utils/customStyle';

  export default function Header(props:any) {
   // const [locale, setLocale] = useState(""); 
    const locale = props.locale;
    /*useEffect(() => {
      if(window.localStorage.getItem('lang')==''){
        setLocale('en-CA');
        window.localStorage.setItem('lang', 'en-CA');
      }else{
        setLocale(window.localStorage.getItem('lang')!);
      }
     

      
    }, []);
  
    useEffect(() => {
      window.localStorage.setItem('lang', locale);
    }, [locale]);
  */
    function setLang(e:any) {
      props.onLanguageChange(e.target.value);
    }
    const store = useMenuStoreImplementation ();
    
    const {
        getMenus,
        menu,
        isLoadingMenus

    } = useMenuViewModel(store);

    useEffect(()=>{
        getMenus();

    },[getMenus]);
   
  
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
   const lang= locale.split("-");
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
      return (
<>
    <Box sx={{display: 'flex' }}>
        <Box sx={{ width: '20%'}}>
        <ul className="uk-navbar-nav">
            <li>
             <Link to="/">Strapi Blog</Link>
            </li>
        </ul>  
        </Box>
        <Box sx={{ display: 'flex' ,width: '60%'}}>
        {menu.items.map((item:Item) => {
            return (
                <MenuItem
                component={Link}
                // the 'to' prop (and any other props not recognized by MenuItem itself)
                // will be passed down to the Link component
                to={item.url}
                key={item.title}
                >
                    {item.title}
                </MenuItem>
            );
          })}
          </Box>
          <Box sx={{ display: 'flex', alignSelf:'flex-end'}}>
            <Box sx={{ alignSelf:'center'}}>
              <ReactCountryFlag
                countryCode={lang[1]}
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.4.5/flags/1x1/"
                cdnSuffix="svg"
                title="US"
                style={{borderRadius:20, marginBottom:5, height:20, width:20}}
            />
            </Box>
            <Box>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <StyledSelect
                name="locales"
                id="locales"
                value={locale}
                onChange={setLang}
                autoWidth
                variant='standard'
                >
                    <MenuItem value="en-CA">EN-CA</MenuItem>
                    <MenuItem value="fr-CA">FR-CA</MenuItem>
                </StyledSelect>
            </FormControl>
            </Box>
            </Box>
            </Box>
            </>);
    };
  
    const displayMobile = (menu:any) => {
 
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
            {menu.items.map((item:Item) => {
            return (
                <MenuItem
                component={Link}
                // the 'to' prop (and any other props not recognized by MenuItem itself)
                // will be passed down to the Link component
                to={item.url}
                key={item.title}
                >
                    {item.title}
                </MenuItem>
            );
          })}
                </MenuList>         
          </Drawer>
    
          <Box sx={{display: 'flex' }}>
        <Box sx={{ width: '100%'}}>
        <ul className="uk-navbar-nav">
            <li>
             <Link to="/">Strapi Blog</Link>
            </li>
        </ul>  
        </Box>
        <Box sx={{ display: 'flex', alignSelf:'flex-end'}}>
                      <ReactCountryFlag
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.4.5/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            />
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <StyledSelect
                name="locales"
                id="locales"
                value={locale}
                onChange={setLang}
                autoWidth
                >
                    <MenuItem value="en-CA">EN-CA</MenuItem>
                    <MenuItem value="fr-CA">FR-CA</MenuItem>
                </StyledSelect>
            </FormControl>
            </Box>
        </Box>
        </Toolbar>
      );
    };
    
  
    return (
      <AppBar position="fixed" color="primary">
      {isLoadingMenus ? (
          <h1>Loading</h1>
      ):(
          mobileView ? displayMobile(menu) : displayDesktop(menu))
      }

      </AppBar>
    );
  }