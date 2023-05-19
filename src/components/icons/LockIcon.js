import * as React from 'react';
import {Svg, G, Defs, Path, ClipPath, Rect} from 'react-native-svg';

function LockIcon({width, height, color}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 8.424V6.99998C19 3.13402 15.866 0 12 0C8.13397 0 5 3.13402 5 6.99998V8.424C3.18003 9.2183 2.00263 11.0143 2 13V19C2.00328 21.76 4.23992 23.9967 6.99997 24H17C19.76 23.9967 21.9966 21.76 22 19V13C21.9974 11.0143 20.8199 9.2183 19 8.424ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15V17ZM17 8.00002H6.99997V7.00003C6.99997 4.23863 9.23853 2.00002 12 2.00002C14.7614 2.00002 17 4.23858 17 7.00003V8.00002Z"
        fill={color || 'black'}
      />
    </Svg>
  );
}

export default LockIcon;
