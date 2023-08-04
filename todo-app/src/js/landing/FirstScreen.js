import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '../common/Button';
import Typography from '../common/Typography';
import HeroWonder from './images/productHeroWonder.png';
import HeroArrow from './images/productHeroArrowDown.png';

const FirstScreenRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

export default function FirstScreen() {
  return (
    <FirstScreenRoot className="first-screen-section sectionContainer">
      <Container maxWidth="false" className="first-screen-section__container inlineSizeContainer">
        <img className="first-screen-section__image" src={HeroWonder} alt="wonder" />
        <Typography
          className="first-screen-section__title typographyFontBase"
          color="inherit"
          align="center"
          variant="h1"
          marked="center"
        >
          Organize your work and life
        </Typography>
        <Typography
          className="first-screen-section__subtitle"
          color="inherit"
          align="center"
          variant="h5"
        >
          Become focused, organized, and calm with TODO-app.
        </Typography>
        <Button
          className="button button_square first-screen-section__button"
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          href="/sign-up/"
        >
          Start planning
        </Button>
        <Typography className="first-screen-section__body-text" variant="h5" color="inherit">
          Discover the experience
        </Typography>
        <Box
          className="first-screen-section__arrow_bounce"
          component="img"
          src={HeroArrow}
          alt="arrow down"
        />
      </Container>
    </FirstScreenRoot>
  );
}
