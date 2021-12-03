import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  breadCrumbs: {
    textTransform: 'uppercase',
  },
  table: {
    minWidth: 650,
  },
  th: {
    textTransform: 'uppercase',
    fontSize: 12,
  },
  field: {
    '& > *': {
      width: '100%',
      backgroundColor: '#F4F8FB',
    },
  },
  link: {
    textTransform: 'capitalize',
  },
}));

export default function Developers() {
  const classes = useStyles();
  const [fadeTimeout, setFadeTimeout] = React.useState(0);
  const [slideTimeout, setSlideTimeout] = React.useState(0);
  React.useEffect(() => {
    setSlideTimeout(400);
    setFadeTimeout(800);
  }, []);
  return (
    <div className={classes.root}>
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
            color="textPrimary"
            variant="caption"
            gutterBottom
          >
            <b color="red">Developers</b>
          </Typography>
        </Box>
      </Fade>
      <Slide direction="up" in={slideTimeout} timeout={slideTimeout}>
        <Card className={classes.root} variant="outlined">
          <CardHeader
            title={
              <Button
                component={Link}
                to="/Developer/Create"
                variant="contained"
                color="primary"
                size="Large"
                startIcon={<AddIcon />}
              >
                New Developer
              </Button>
            }
          />
          <CardContent className={classes.field}>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Filter by Employee Id, Name, Email"
              variant="outlined"
            />
          </CardContent>
          <CardContent>
            <TableContainer>
              <Table
                className={classes.table}
                aria-label="simple table stripped"
                size="small"
              >
                <TableHead className={classes.thead}>
                  <TableRow>
                    <TableCell className={classes.th}>Employee ID</TableCell>
                    <TableCell className={classes.th}>Name</TableCell>
                    <TableCell className={classes.th}>Hire Date</TableCell>
                    <TableCell className={classes.th}>Status</TableCell>
                    <TableCell className={classes.th} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1700651
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Charles Dalisay
                    </TableCell>
                    <TableCell>01/01/2000</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell align="center">
                      <Button
                        className={classes.link}
                        component={Link}
                        color="primary"
                        to="/Developer/Edit"
                      >
                        Edit
                      </Button>
                      &nbsp;|&nbsp;
                      <Button
                        className={classes.link}
                        component={Link}
                        color="primary"
                        to="/Service/Edit"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Slide>
    </div>
  );
}
