import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Theme from '../../Theme';

const ProgressCircle = ({ value, maxValue }) => {
  return (
    <Theme>
      <CircularProgressbar
        value={value}
        maxValue={maxValue}
        text={`${value} / ${maxValue}`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 1,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',

          // Text size
          textSize: '16px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 2,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(73, 71, 168, ${Number(value) / 10})`,
          textColor: `#4947a8`,
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </Theme>
  );
};

export default ProgressCircle;
