import React from 'react';

const ProgressRing = (props) => {
  const { height, width, fill, stroke, strokeWidth, targetProgress , headshot } = props;
  // const [ progressState, setProgressState ] = useState(0);
  const radius = (width / 2 );
  const circumference = (radius * 2 * Math.PI);
  const cx = (width / 2 );
  const cy = (height / 2 );

  const setProgress = function (progress) {
    const offset = circumference - (progress / 100 * circumference);
    const style = { strokeDashoffset: `-${offset}` };
    return style;
  };
  
  if (headshot === true ) {
    return (
      <svg
        className="progress-ring"
        height={`${height}`}
        width={`${width}`}
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 0 "
          to="360 0 0"
          dur="50s"
          repeatCount="indefinite" />
        <circle
          className="progress-ring__circle"
          stroke={`${stroke}`}
          strokeWidth={`${strokeWidth}`}
          strokeDasharray={`${circumference} ${circumference}`}
          style={setProgress(targetProgress)}
          fill={`${fill}`}
          r={`${radius}`}
          cx={`${cx}`}
          cy={`${cy}`}
        />
      </svg>
    );
  } else {
    return (
      <svg
        className="progress-ring"
        height={`${height}`}
        width={`${width}`}
      >
        <circle
          className="progress-ring__circle"
          stroke={`${stroke}`}
          strokeWidth={`${strokeWidth}`}
          strokeDasharray={`${circumference} ${circumference}`}
          style={setProgress(targetProgress)}
          fill={`${fill}`}
          r={`${radius}`}
          cx={`${cx}`}
          cy={`${cy}`}
        />
      </svg>
    );
  }


  
};

export default ProgressRing;