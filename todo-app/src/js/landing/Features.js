import * as React from 'react';

import Box from '@mui/material/Box';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Typography from '../common/Typography';
import lines from './images/productCurvyLines.png';

function Features() {
  return (
    <Box
      className="features-section sectionContainer"
      component="section"
      maxWidth="xl"
      sx={{ bgcolor: 'secondary.light', color: 'primary.dark' }}
    >
      <Box className="features-section__container inlineSizeContainer">
        <Box
          className="bgImage-curvyLines features-section__bgImage"
          component="img"
          src={lines}
          alt="curvy lines"
        />
        <Box className="features-section__items-wrapper">
          <Box className="features-section__item inlineSizeContainer">
            <FormatListNumberedIcon className="features-section__icon" />
            <Typography className="features-section__title" variant="h6">
              Add tasks in few clicks
            </Typography>
            <Typography className="features-section__text" variant="h5">
              {'Create projects of any complexity, from simple lists of TODOs '}
              {'to big team projects with nested sub-tasks and labels.'}
            </Typography>
          </Box>
          <Box className="features-section__item inlineSizeContainer">
            <ViewColumnIcon className="features-section__icon" />
            <Typography className="features-section__title" variant="h6">
              Control progress
            </Typography>
            <Typography className="features-section__text" variant="h5">
              {'Create columns with different progress status and move'}
              {' your TODOs through the table until they are fulfilled.'}
            </Typography>
          </Box>
          <Box className="features-section__item inlineSizeContainer">
            <PendingActionsIcon className="features-section__icon" />
            <Typography className="features-section__title" variant="h6">
              Customize your TODOs
            </Typography>
            <Typography className="features-section__text" variant="h5">
              {'Add description, use labels, set a priority, then use it to sort tasks.'}
              {'You can also asign workers to a task and schedule a due time with notifications.'}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Features;
