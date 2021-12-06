import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';

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
  const [slideTimeout, setSlideTimeout] = React.useState(0);
  const [status, setStatus] = React.useState('');
  React.useEffect(() => {
    setSlideTimeout(400);
  }, []);
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div>
      <Grow in={slideTimeout} >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <form autoComplete="off">
              <Grid container spacing={2}>
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
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grow>
    </div>
  );
}
