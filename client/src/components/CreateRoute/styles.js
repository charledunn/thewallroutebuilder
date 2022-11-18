import { makeStyles } from "@material-ui/core/styles";

export default makeStyles ((theme) => ({
  rightContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  explainPaper: {
    marginBottom: '12px',
    padding: '2%',
  },
  gridPaper: {
    height: '85vh',
    [theme.breakpoints.down('md')]: {
      height: '60vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '55vh',
    },
  },
  wallGrid: {
    height: '100%',
    paddingTop: '10px',
    paddingLeft: '5%',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, auto)',
  },
  images: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  smHold: {
    height: '27px',
    [theme.breakpoints.down('md')]: {
      height: '21px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '16px',
    },
  },
  lgHold: {
    height: '35px',
    [theme.breakpoints.down('md')]: {
      height: '27px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '24px',
    },
  },
  foothold: {
    height: '11px',
    [theme.breakpoints.down('md')]: {
      height: '7px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '6px',
    },
  },
  volume: {
    height: '180px',
    [theme.breakpoints.down('md')]: {
      height: '106px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '67px',
    },
  },
  sloper: {
    height: '120px',
    [theme.breakpoints.down('md')]: {
      height: '71px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '48px',
    },
  },
}));