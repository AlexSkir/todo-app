import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import video from '../images/how_it_works.mp4';

let oldTime = 0;

function Video(props) {
  const { progress } = props;
  const [time, setTime] = React.useState(0);

  const setCurrentTime = () => {
    setTime(0);
    switch (progress) {
      case 1:
        setTime(0.1);
        break;
      case 33:
        setTime(0.7);
        break;
      case 67:
        setTime(1.8);
        break;
      case 100:
        setTime(3.9);
        break;
      default:
        setTime(0);
        break;
    }
    const player = document.getElementById('videocard');
    if (player !== null) {
      if (time !== oldTime && progress !== 0) {
        player.currentTime = time;
        oldTime = time;
        const playPromise = player.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setTimeout(() => {
                player.pause();
              }, 500);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log('player not loaded');
        }
      } else if (progress === 0) {
        player.currentTime = 0;
        oldTime = 0;
      }
    }
  };

  return (
    <Box
      className="complexity-slider-section_videoContainer"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        inlineSize: '50%',
      }}
    >
      <video id="videocard" muted ref={setCurrentTime}>
        <source src={video} type="video/mp4" />
      </video>
    </Box>
  );
}

Video.propTypes = {
  progress: PropTypes.number,
};

export default Video;
