import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '../../assets/icon.png';
import IconDark from '../../assets/iconDark.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WebIcon from '@material-ui/icons/Web';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MenuIcon from '@material-ui/icons/Menu';
import { Routes, Route, BrowserRouter as Router, NavLink, useLocation  } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateDeveloper from '../Developer/Create';
import Developers from '../Developer/Developers';
import EditDeveloper from '../Developer/Edit';
import CreateService from '../Service/Create';
import Services from '../Service/Services';
import EditService from '../Service/Edit';

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
    paddingTop: 20,
    paddingBottom: 20,
  },
}));

export default function Layout() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });;
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
              <Button
                size="small"
                edge="end"
                aria-haspopup="true"
                color="inherit"
              >
                Logout
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container justifyContent="center" className={classes.content}>
        <Grid item xs={11} sm={11} md={10}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Dashboard />} />
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
