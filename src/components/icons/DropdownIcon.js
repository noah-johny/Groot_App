import * as React from 'react';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

function DropdownIcon({width, height, color, onPress, isOpen, isVisible}) {
  onPress = {onPress};
  return (
    <>
      {isVisible && (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          rotation={isOpen ? 180 : 0}
          viewBox="0 0 24 24">
          <G clip-path="url(#clip0_574_1474)">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.06 16.0599C12.7788 16.3408 12.3975 16.4986 12 16.4986C11.6025 16.4986 11.2213 16.3408 10.94 16.0599L5.28202 10.4039C5.00076 10.1225 4.8428 9.74089 4.8429 9.34304C4.84299 8.94518 5.00113 8.56365 5.28252 8.28239C5.56392 8.00113 5.94552 7.84317 6.34338 7.84326C6.74123 7.84336 7.12276 8.00149 7.40402 8.28289L12 12.8789L16.596 8.28289C16.8788 8.00952 17.2576 7.85814 17.6509 7.86137C18.0442 7.8646 18.4205 8.02218 18.6988 8.30016C18.977 8.57815 19.1349 8.95429 19.1385 9.34759C19.1421 9.74088 18.9911 10.1199 18.718 10.4029L13.061 16.0609L13.06 16.0599Z"
              fill={color || '#151810'}
            />
          </G>
          <Defs>
            <ClipPath id="clip0_574_1474">
              <Rect width="24" height="24" fill="transparent" />
            </ClipPath>
          </Defs>
        </Svg>
      )}
    </>
  );
}

export default DropdownIcon;
