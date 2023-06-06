import * as React from 'react';
import {Svg, Path, Circle, ClipPath, Rect, Defs} from 'react-native-svg';

function LogoutIcon({size, onPress}) {
  onPress = {onPress};
  return (
    <Svg
      width={size - 1}
      height={size}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.88998 12.4908H7.81415C5.22415 12.4908 3.97581 11.47 3.75998 9.18334C3.73665 8.94417 3.91165 8.72834 4.15665 8.705C4.38998 8.68167 4.61165 8.8625 4.63498 9.10167C4.80415 10.9333 5.66748 11.6158 7.81998 11.6158H7.89581C10.27 11.6158 11.11 10.7758 11.11 8.40167V4.59834C11.11 2.22417 10.27 1.38417 7.89581 1.38417H7.81998C5.65581 1.38417 4.79248 2.07834 4.63498 3.945C4.60581 4.18417 4.40165 4.365 4.15665 4.34167C4.09915 4.33718 4.04312 4.32138 3.99174 4.29518C3.94037 4.26898 3.89468 4.2329 3.85728 4.189C3.81989 4.1451 3.79153 4.09425 3.77383 4.03937C3.75613 3.98448 3.74944 3.92665 3.75415 3.86917C3.95248 1.5475 5.20665 0.509171 7.81415 0.509171H7.88998C10.7541 0.509171 11.9791 1.73417 11.9791 4.59834V8.40167C11.9791 11.2658 10.7541 12.4908 7.88998 12.4908Z"
        fill="#FF0000"
      />
      <Path
        d="M7.75015 6.9375H1.11182C0.87265 6.9375 0.674316 6.73917 0.674316 6.5C0.674316 6.26083 0.87265 6.0625 1.11182 6.0625H7.75015C7.98932 6.0625 8.18765 6.26083 8.18765 6.5C8.18765 6.73917 7.98932 6.9375 7.75015 6.9375Z"
        fill="#FF0000"
      />
      <Path
        d="M2.41254 8.89168C2.30171 8.89168 2.19088 8.85084 2.10338 8.76334L0.149209 6.80918C0.0678459 6.72685 0.0222168 6.61576 0.0222168 6.50001C0.0222168 6.38426 0.0678459 6.27317 0.149209 6.19084L2.10338 4.23668C2.27254 4.06751 2.55254 4.06751 2.72171 4.23668C2.89088 4.40584 2.89088 4.68584 2.72171 4.85501L1.07671 6.50001L2.72171 8.14501C2.89088 8.31418 2.89088 8.59418 2.72171 8.76334C2.64004 8.85084 2.52338 8.89168 2.41254 8.89168Z"
        fill="#FF0000"
      />
    </Svg>
  );
}

export default LogoutIcon;