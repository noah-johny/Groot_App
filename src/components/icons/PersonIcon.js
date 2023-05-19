import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

function PersonIcon({width, height, color}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12Z"
        fill={color ? color : 'black'}
      />
      <Path
        d="M12 13.999C7.03172 14.0046 3.00553 18.0307 3 22.999C3 23.5513 3.4477 23.999 3.99998 23.999H20C20.5522 23.999 21 23.5513 21 22.999C20.9945 18.0307 16.9683 14.0045 12 13.999Z"
        fill={color ? color : 'black'}
      />
    </Svg>
  );
}

export default PersonIcon;
