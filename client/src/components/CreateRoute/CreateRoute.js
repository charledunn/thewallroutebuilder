import { Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Form from '../Form/Form';
import GridNode from './GridNode/GridNode';
import DraggableImage from './DraggableImage';
import useStyles from './styles'
import volume from '../../images/volume.png';
import creasedCrimps from '../../images/creased_crimps.png';
import crimpStyleII from '../../images/crimp_style2.png';
import crimps from '../../images/crimps.png';
import footholds from '../../images/footholds.png';
import jugs from '../../images/jugs.png';
import moreCrimps from '../../images/more_crimps.png';
import pinches from '../../images/pinches.png';
import slopers from '../../images/slopers.png';
import slots from '../../images/slots.png';
import smoothCrimp from '../../images/smooth_crimp.png';
import tortureFoothold from '../../images/torture_foothold.png';
import torture from '../../images/torture.png';

const CreateRoute = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  
  const nodes = [];
  for (let i = 0; i < 132; i++) {
    const node = [];
    nodes.push(node);
  }

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid className={classes.leftContainer} item sm={12} lg={4}>
            <Paper className={classes.explainPaper} elevation={6}>
              <Typography variant="body1">
                To create a route, drag the holds from the right (from below on mobile) to where you want them to be. You can rotate them in 45 degree intervals by clicking the arrow. Take a screenshot of the route and select your screenshot with the choose file button in the form. (Wall Dimensions are 8ft x 12ft with a 45 degree overhang starting inbetween the second and third row of holes.
              </Typography>
            </Paper>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid className={classes.rightContainer} item sm={12} lg={5}>
            <Paper className={classes.gridPaper} elevation={6}>
              <div className={classes.wallGrid}>
                {nodes.map(() => {
                return <div>
                    <GridNode />
                  </div>
                })}
              </div>
            </Paper>
          </Grid>
          <Grid className={classes.images} item sm={12} lg={3}>
            <DraggableImage className={classes.smHold} src={creasedCrimps} alt="creasedCrimps" />
            <DraggableImage className={classes.smHold} src={creasedCrimps} alt="creasedCrimps" />
            <DraggableImage className={classes.smHold} src={crimpStyleII} alt="crimpStyleII" />
            <DraggableImage className={classes.smHold} src={crimpStyleII} alt="crimpStyleII" />
            <DraggableImage className={classes.smHold} src={crimps} alt="crimps" />
            <DraggableImage className={classes.smHold} src={crimps} alt="crimps" />
            <DraggableImage className={classes.lgHold} src={jugs} alt="jugs" />
            <DraggableImage className={classes.lgHold} src={jugs} alt="jugs" />
            <DraggableImage className={classes.smHold} src={moreCrimps} alt="moreCrimps" />
            <DraggableImage className={classes.smHold} src={moreCrimps} alt="moreCrimps" />
            <DraggableImage className={classes.smHold} src={pinches} alt="pinches" />
            <DraggableImage className={classes.smHold} src={pinches} alt="pinches" />
            <DraggableImage className={classes.lgHold} src={slots} alt="slots" />
            <DraggableImage className={classes.lgHold} src={slots} alt="slots" />
            <DraggableImage className={classes.smHold} src={smoothCrimp} alt="smoothCrimp" />
            <DraggableImage className={classes.smHold} src={smoothCrimp} alt="smoothCrimp" />
            <DraggableImage className={classes.smHold} src={torture} alt="torture" />
            <DraggableImage className={classes.smHold} src={torture} alt="torture" />
            <DraggableImage className={classes.foothold} src={footholds} alt="footholds" />
            <DraggableImage className={classes.foothold} src={footholds} alt="footholds" />
            <DraggableImage className={classes.foothold} src={tortureFoothold} alt="tortureFoothold" />
            <DraggableImage className={classes.foothold} src={tortureFoothold} alt="tortureFoothold" />
            <DraggableImage className={classes.sloper} src={slopers} alt="slopers" />
            <DraggableImage className={classes.volume} src={volume} alt="volume" />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default CreateRoute;