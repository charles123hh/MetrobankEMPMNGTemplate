import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor:'#3f51b5',
    },
  },
  completed: {
    '& $line': {
      backgroundColor:'#3f51b5',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor:'#3f51b5',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor:'#3f51b5',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',

  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  breadCrumbs: {
    textTransform: 'uppercase',
  },
  stepper: {
    backgroundColor: 'transparent'
  },
}));

function getSteps() {
  return ['', '', ''];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return '';
    case 1:
      return '';
    case 2:
      return '';
    default:
      return '';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [fadeTimeout, setFadeTimeout] = React.useState(0);
  const [slideTimeout, setSlideTimeout] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    setSlideTimeout(400);
    setFadeTimeout(800);
  }, []);


  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
          <Fade
        in={fadeTimeout}
        timeout={fadeTimeout}
        style={{ transitionDelay: slideTimeout ? '500ms' : '0ms' }}
      >
        <Box mb={1}>
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
      <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
