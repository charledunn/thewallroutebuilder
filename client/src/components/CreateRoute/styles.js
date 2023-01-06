import { makeStyles } from "@material-ui/core/styles";

export default makeStyles ((theme) => ({
  rightContainer: {
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column-reverse',
    },
  },
  explainPaper: {
    marginBottom: '12px',
    padding: '2%',
  },
  gridPaper: {
    height: '85vh',
    [theme.breakpoints.down('xs')]: {
      height: '60vh',
      width: '80vw',
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
  },
  lgHold: {
    height: '35px',
  },
  foothold: {
    height: '11px',
  },
  volume: {
    height: '180px',
  },
  sloper: {
    height: '120px',
  },
  [theme.breakpoints.down('md')]: {
    smHold: {height: '21px',},
    lgHold: {height: '27px',},
    foothold: {height: '7px',},
    volume: {height: '106px',},
    sloper: {height: '71px',},
  },
  [theme.breakpoints.down('sm')]: {
    smHold: {height: '16px',},
    lgHold: {height: '24px',},
    foothold: {height: '6px',},
    volume: {height: '67px',},
    sloper: {height: '48px',},
  },
}));