/* eslint-disable no-nested-ternary */
import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SliderComplexityList from './slider/SliderComplexity';
import Slider from './slider/Slider';
import Video from './slider/Video';
import Typography from '../common/Typography';

import Lines from './images/productCurvyLines.png';

let calc = 0;

function HowItWorks() {
  const height = window.innerHeight > 1500 ? window.innerHeight : 1500;
  const center = window.innerHeight / 2 + 450;
  calc = height - 900;
  const scrollStep = (height - 900) / 3;

  const spacer = {
    height: `${height}px`,
    padding: `0px 0px ${calc}px`,
  };
  const progressBox = {
    backgroundColor: 'secondary.light',
    translate: 'none',
    rotate: 'none',
    scale: 'none',
    margin: '0px',
    maxWidth: '1088px',
    width: '1088px',
    maxHeight: '782px',
    height: '782px',
    marginTop: '40px',
    paddingTop: '80px',
  };
  const progressStartBox = {
    ...progressBox,
    inset: '0px auto auto 0px',
    transform: 'translate(0px, 0px)',
  };
  const progressInBox = {
    ...progressBox,
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    marginTop: 'auto',
    margin: 'auto',
    position: 'fixed',
    transform: 'translate(0px, 0px)',
  };
  const progressEndBox = {
    ...progressBox,
    inset: '0px auto auto 0px',
    transform: `translate(0px, ${calc}px)`,
  };

  const [progress, setProgress] = React.useState(0);
  const [styles, setStyles] = React.useState(progressStartBox);
  const [cursorState, setCursorState] = React.useState('grab');
  let dragStart;
  let dragEnd;

  const findPosY = (e) => {
    const screenYPos = e.clientY;
    const scrollBarPositionTop = e.currentTarget.getBoundingClientRect().top;
    const scrollBarHeight = e.currentTarget.offsetHeight;
    const progressClicked = Math.floor(
      ((screenYPos - scrollBarPositionTop) / scrollBarHeight) * 100,
    );
    return progressClicked;
  };

  const handleScroll = (e) => {
    const window = e.currentTarget;
    const ancor = document.getElementById('simple-or-complex');
    const ancorPosition = ancor.getBoundingClientRect();
    const ancorToBottom = window.innerHeight - ancorPosition.top;

    if (ancorToBottom >= center && ancorToBottom < center + scrollStep) {
      setProgress(1);
      setStyles(progressInBox);
    } else if (ancorToBottom >= center + scrollStep && ancorToBottom < center + 2 * scrollStep) {
      setProgress(33);
      setStyles(progressInBox);
    } else if (
      ancorToBottom >= center + 2 * scrollStep &&
      ancorToBottom < center + 3 * scrollStep
    ) {
      setProgress(67);
      setStyles(progressInBox);
    } else if (ancorToBottom >= center + 3 * scrollStep) {
      setProgress(100);
      setStyles(progressEndBox);
    } else {
      setProgress(0);
      setStyles(progressStartBox);
    }
  };

  const handleNextStep = (nextProgress) => {
    const section = document.getElementById('pin-spacer');
    if (nextProgress > -10 && nextProgress <= 40) {
      setProgress(33);
      window.scrollTo({
        top: section.offsetTop + scrollStep,
      });
    } else if (nextProgress > 40 && nextProgress <= 75) {
      setProgress(67);
      window.scrollTo({
        top: section.offsetTop + scrollStep * 2,
      });
    } else {
      setProgress(100);
      window.scrollTo({
        top: section.offsetTop + scrollStep * 3,
      });
    }
  };

  const handlePrevStep = (nextProgress) => {
    const section = document.getElementById('pin-spacer');
    console.log(nextProgress);
    if (nextProgress > -10 && nextProgress <= 33) {
      setProgress(0);
      window.scrollTo({
        top: section.offsetTop,
      });
    } else if (nextProgress > 33 && nextProgress <= 67) {
      setProgress(33);
      window.scrollTo({
        top: section.offsetTop + scrollStep,
      });
    } else {
      setProgress(67);
      window.scrollTo({
        top: section.offsetTop + scrollStep * 2,
      });
    }
  };

  const handleMoveEvent = (e) => {
    setCursorState('grabbing');
  };

  const handleUpEvent = (e) => {
    dragEnd = findPosY(e);
    e.currentTarget.removeEventListener('mousemove', handleMoveEvent);
    e.currentTarget.removeEventListener('mouseleave', handleUpEvent);
    setCursorState('grab');

    if (dragStart > dragEnd) {
      handlePrevStep(dragEnd);
    } else {
      handleNextStep(dragEnd);
    }
  };

  const handleClickEvent = (e) => {
    e.preventDefault();
    dragStart = findPosY(e);
    e.currentTarget.addEventListener('mousemove', handleMoveEvent);
    e.currentTarget.addEventListener('mouseup', handleUpEvent);
    e.currentTarget.addEventListener('mouseleave', handleUpEvent);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Box className="complexity-slider-section progressBox" component="section">
      <Box id="simple-or-complex" className="complexity-slider-section_anchor" />
      <Box id="pin-spacer" className="pin-spacer" sx={spacer}>
        <Container className="progressBox" sx={styles}>
          <Box
            className="complexity-slider-section_bgImage"
            component="img"
            src={Lines}
            alt="curvy lines"
          />
          <Typography
            className="complexity-slider-section_heading"
            variant="h4"
            marked="center"
            component="h2"
            sx={{ mb: 5, textAlign: 'center', color: 'primary.dark' }}
          >
            How it works
          </Typography>
          <Box className="complexity-slider-section_sliderContainer">
            <Grid
              container
              className="complexity-slider-section_contentContainer"
              direction="row"
              justifyContent="center"
              sx={{ flexWrap: 'nowrap' }}
            >
              <Video progress={progress} />
              <Slider
                progress={progress}
                cursorStyle={cursorState}
                handleClick={handleClickEvent}
              />
              <SliderComplexityList progress={progress} />
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HowItWorks;
