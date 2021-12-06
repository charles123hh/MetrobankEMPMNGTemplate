import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  subTitle: {
    textTransform: 'uppercase',
    marginTop: 15,
  },
  breadCrumbs: {
    textTransform: 'uppercase',
  },
  field: {
    '& > *': {
      width: '100%',
      backgroundColor: '#F4F8FB',
    },
  },
});

export default function Create() {
  const classes = useStyles();
  const [fadeTimeout, setFadeTimeout] = React.useState(0);
  const [slideTimeout, setSlideTimeout] = React.useState(0);

  const [department, setDepartment] = React.useState('');
  const [supervisor, setSupervisor] = React.useState('');
  const [status, setStatus] = React.useState('');
  React.useEffect(() => {
    setSlideTimeout(400);
    setFadeTimeout(800);
  }, []);
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const handleSupervisorChange = (event) => {
    setSupervisor(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div>
      <Fade
        in={fadeTimeout}
        timeout={fadeTimeout}
        style={{ transitionDelay: slideTimeout ? '500ms' : '0ms' }}
      >
        <Box mb={2}>
          <PeopleAltIcon />
          <Typography
            variant="button"
            display="block"
            gutterBottom
          ></Typography>
          <Typography
            className={classes.breadCrumbs}
            color="textSecondary"
            variant="caption"
            gutterBottom
          >
            Main /&nbsp;
          </Typography>
          <Typography
            className={classes.breadCrumbs}
            color="textSecondary"
            variant="caption"
            gutterBottom
          >
            Developers /&nbsp;
          </Typography>
          <Typography
            className={classes.breadCrumbs}
            color="textPrimary"
            variant="caption"
            gutterBottom
          >
            <b color="red">Create</b>
          </Typography>
        </Box>
      </Fade>
      <Slide direction="up" in={slideTimeout} timeout={slideTimeout}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <form autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Box mt={1}>
                    <Typography
                      className={classes.breadCrumbs}
                      color="textSecondary"
                      variant="caption"
                      gutterBottom
                    >
                      Personal Details
                    </Typography>
                  </Box>
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12} md={4}>
                  <TextField label="First name" variant="outlined" />
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12} md={4}>
                  <TextField label="Middle name" variant="outlined" />
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12} md={4}>
                  <TextField label="Last name" variant="outlined" />
                </Grid>

                <Grid className={classes.field} item xs={12} sm={12} md={6}>
                  <TextField label="Address Line" variant="outlined" />
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12} md={6}>
                  <TextField label="City / Province" variant="outlined" />
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12}>
                  <TextField
                    type="number"
                    label="Contact #"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box mt={2}>
                    <Typography
                      className={classes.breadCrumbs}
                      color="textSecondary"
                      variant="caption"
                      gutterBottom
                    >
                      Employee Details
                    </Typography>
                  </Box>
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12} md={12}>
                  <TextField
                    type="text"
                    label="Employee ID"
                    variant="outlined"
                  />
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12} md={12}>
                  <TextField
                    type="email"
                    label="Metrobank email"
                    variant="outlined"
                  />
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12} md={6}>
                  <TextField type="date" label="Hire date" variant="outlined"  InputLabelProps={{shrink: true,}}/>
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12} md={6}>
                  <FormControl variant="outlined">
                    <InputLabel>Is - Active</InputLabel>
                    <Select
                      onChange={handleStatusChange}
                      label="Is - Active"
                      value={status}
                    >
                      <MenuItem value={0}>No</MenuItem>
                      <MenuItem value={1}>Yes</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box mt={2}>
                    <Typography
                      className={classes.breadCrumbs}
                      color="textSecondary"
                      variant="caption"
                      gutterBottom
                    >
                      Department
                    </Typography>
                  </Box>
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12}>
                  <FormControl variant="outlined">
                    <Select
                      onChange={handleDepartmentChange}
                      value={department}
                    ></Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box mt={2}>
                    <Typography
                      className={classes.breadCrumbs}
                      color="textSecondary"
                      variant="caption"
                      gutterBottom
                    >
                      Supervisor
                    </Typography>
                  </Box>
                </Grid>
                <Grid className={classes.field} item xs={12} sm={12}>
                  <FormControl variant="outlined">
                    <Select
                      onChange={handleSupervisorChange}
                      value={supervisor}
                    ></Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button variant="contained" color="primary" size="Large">
                    Submit
                  </Button>
                  &nbsp; &nbsp;
                  <Button component={Link} to="/Developer" variant="contained" size="Large">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Slide>
    </div>
  );
}
