import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const defaultDot = (
  <Box
    className="dot-indicator_default"
    sx={{ backgroundColor: 'secondary.light', borderColor: 'primary.lighter' }}
  />
);

const highlightedDot = (
  <CheckCircleOutlineIcon sx={{ color: 'secondary.dark', backgroundColor: 'secondary.light' }} />
);

function Slider(props) {
  const { progress, cursorStyle, handleClick } = props;

  return (
    <Box
      id="slider-container_sliderContainer"
      className="slider-container_sliderContainer"
      sx={{ cursor: cursorStyle }}
      onMouseDown={handleClick}
    >
      <Box
        className="slider-container_progressBackground"
        sx={{ backgroundColor: 'primary.lighter' }}
      />
      <Box
        className="slider-container_progressBar"
        sx={{ '--progress': `${progress}%`, backgroundColor: 'secondary.dark' }}
      />

      <Box className="dot-indicator_dotIndicator" sx={{ '--progress': '0%' }}>
        {progress > 0 ? highlightedDot : defaultDot}
      </Box>
      <Box className="dot-indicator_dotIndicator" sx={{ '--progress': '33%' }}>
        {progress > 33 ? highlightedDot : defaultDot}
      </Box>
      <Box className="dot-indicator_dotIndicator" sx={{ '--progress': '67%' }}>
        {progress > 67 ? highlightedDot : defaultDot}
      </Box>
      <Box className="dot-indicator_dotIndicator" sx={{ '--progress': '100%' }}>
        {progress > 100 ? highlightedDot : defaultDot}
      </Box>
      {progress > 0 ? (
        <Box
          id="thumb-indicator"
          className="thumb-indicator_indicator"
          sx={{ '--progress': `${progress}%`, backgroundColor: 'secondary.dark' }}
        >
          <Box className="thumb-indicator_button">
            <IconButton>
              <CodeIcon color="primary.lighter" sx={{ transform: 'rotate(90deg)' }} />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}

Slider.propTypes = {
  progress: PropTypes.number,
  cursorStyle: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Slider;
