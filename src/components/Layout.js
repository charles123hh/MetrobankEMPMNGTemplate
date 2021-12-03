import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '../assets/icon.png';
import IconDark from '../assets/iconDark.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WebIcon from '@material-ui/icons/Web';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Routes, Route, BrowserRouter as Router, NavLink, useLocation  } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateDeveloper from './Developer/Create';
import Developers from './Developer/Developers';
import EditDeveloper from './Developer/Edit';
import CreateService from './Service/Create';
import Services from './Service/Services';
import EditService from './Service/Edit';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 260,
  },
  fullList: {
    width: 'auto',
  },
  content: {
    minHeight: '80vh',
    paddingTop: 30,
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  footer:{
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
}));

export default function Layout() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem color="primary" className={classes.banner}>
          <img src={IconDark} height="24" alt="Metrobank" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText fontSize="small" secondary="Main" />
        </ListItem>
        <ListItem  className={classes.link} component={NavLink} to={'/'}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={'Dashboard'} />
        </ListItem>
        <ListItem
          className={classes.link}
          component={NavLink}
          to={'/Developer'}
        >
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary={'Developer'} />
        </ListItem>
        <ListItem
          className={classes.link}
          component={NavLink}
          to={'/Service'}
        >
          <ListItemIcon>
            <WebIcon />
          </ListItemIcon>
          <ListItemText primary={'Service'} />
        </ListItem>
      </List>
        <ListItem>
          <ListItemText fontSize="small" secondary="Miscellaneous" />
        </ListItem>
        <ListItem  className={classes.link} component={NavLink} to={'/'}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary={'Report'} />
        </ListItem>
        <ListItem  className={classes.link} component={NavLink} to={'/'}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={'Setting'} />
        </ListItem>
    </div>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Router>
      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
      <div className={classes.grow}>
        <AppBar position="relative">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
              <img src={Icon} alt="Metrobank" height="24" />&nbsp;Metrobank
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                onClick={handleMobileMenuOpen}
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      <Grid container justifyContent="center" className={classes.content}>
        <Grid item xs={11} sm={11} md={10}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Dashboard />} title="Metrobank" />
            <Route path="/Developer/Create" element={<CreateDeveloper />}/>
            <Route path="/Developer" element={<Developers />} />
            <Route path="/Developer/Edit" element={<EditDeveloper />} />
            <Route path="/Service/Create" element={<CreateService />} />
            <Route path="/Service" element={<Services />} />
            <Route path="/Service/Edit" element={<EditService />} />
          </Routes>
        </Grid>
      </Grid>
      <AppBar className={classes.footer} elevation={0} color="transparent" position="static">
        <Typography color="textSecondary">© 2021 Collbera PH.</Typography>
      </AppBar>
    </Router>
  );
}
