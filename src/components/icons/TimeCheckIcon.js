import * as React from 'react';
import {Svg, G, Defs, Path, ClipPath, Rect} from 'react-native-svg';

function TimeCheckIcon({width, height, color}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_181_542)">
        <Path
          d="M5.74933 13.0261C4.7931 12.7916 3.92209 12.2929 3.23576 11.5869C2.54943 10.881 2.07545 9.99627 1.86793 9.0338C1.66042 8.07134 1.72773 7.06991 2.0622 6.14388C2.39666 5.21784 2.98478 4.40452 3.75942 3.79678C4.53405 3.18905 5.46398 2.81138 6.443 2.70693C7.42203 2.60247 8.4107 2.77542 9.29613 3.20603C10.1816 3.63665 10.928 4.30757 11.4504 5.14219C11.9727 5.97681 12.2498 6.94148 12.25 7.92607C12.25 8.15813 12.3422 8.38069 12.5063 8.54479C12.6704 8.70888 12.8929 8.80107 13.125 8.80107C13.3571 8.80107 13.5796 8.70888 13.7437 8.54479C13.9078 8.38069 14 8.15813 14 7.92607C13.9998 6.6132 13.6304 5.32684 12.934 4.21391C12.2375 3.10098 11.2422 2.20632 10.0615 1.63213C8.88088 1.05793 7.56255 0.827327 6.2571 0.966661C4.95164 1.106 3.71168 1.60965 2.67882 2.4201C1.64596 3.23055 0.861836 4.31513 0.415994 5.54998C-0.0298479 6.78483 -0.119434 8.12017 0.157465 9.40351C0.434365 10.6868 1.06659 11.8664 1.98194 12.8076C2.89728 13.7488 4.05886 14.4135 5.334 14.726C5.40193 14.7428 5.47168 14.7512 5.54167 14.7511C5.75551 14.7508 5.96187 14.6723 6.12177 14.5303C6.28166 14.3883 6.38402 14.1927 6.40951 13.9804C6.435 13.768 6.38185 13.5537 6.26011 13.3779C6.13837 13.2021 5.95647 13.077 5.74875 13.0261H5.74933Z"
          fill={color || '#375C0A'}
        />
        <Path
          d="M13.7789 10.2237C13.6148 10.0596 13.3923 9.96747 13.1603 9.96747C12.9283 9.96747 12.7058 10.0596 12.5417 10.2237L9.75043 13.0132L8.50618 11.6948C8.42659 11.6119 8.33145 11.5455 8.2262 11.4994C8.12094 11.4533 8.00764 11.4283 7.89275 11.426C7.77785 11.4237 7.66363 11.444 7.55659 11.4858C7.44956 11.5276 7.35181 11.5901 7.26893 11.6697C7.18607 11.7494 7.11972 11.8445 7.07365 11.9498C7.02757 12.0551 7.00269 12.1684 7.00042 12.2833C6.99814 12.3982 7.01852 12.5124 7.06039 12.6194C7.10225 12.7264 7.16479 12.8241 7.24442 12.907L8.75001 14.4942C8.87587 14.6275 9.02707 14.7344 9.19475 14.8085C9.36243 14.8826 9.54321 14.9225 9.72651 14.9259H9.74809C10.1113 14.9247 10.4594 14.7805 10.717 14.5246L13.7818 11.4609C13.9455 11.2964 14.0371 11.0737 14.0366 10.8417C14.036 10.6097 13.9434 10.3874 13.7789 10.2237Z"
          fill={color || '#375C0A'}
        />
        <Path
          d="M6.12489 5.3009V7.37465L4.72489 8.24965C4.62746 8.31065 4.54301 8.39024 4.47635 8.48389C4.4097 8.57753 4.36215 8.68339 4.33642 8.79541C4.31068 8.90744 4.30728 9.02344 4.32639 9.13678C4.3455 9.25013 4.38676 9.35859 4.4478 9.45599C4.5088 9.55341 4.58839 9.63786 4.68203 9.70452C4.77568 9.77117 4.88154 9.81873 4.99356 9.84446C5.10559 9.87019 5.22159 9.8736 5.33493 9.85448C5.44827 9.83537 5.55674 9.79411 5.65414 9.73307L7.32772 8.68307C7.49563 8.57785 7.63398 8.43159 7.72971 8.25809C7.82544 8.08459 7.87541 7.88956 7.87489 7.6914V5.3009C7.87489 5.06884 7.7827 4.84628 7.6186 4.68218C7.45451 4.51809 7.23195 4.4259 6.99989 4.4259C6.76782 4.4259 6.54526 4.51809 6.38117 4.68218C6.21707 4.84628 6.12489 5.06884 6.12489 5.3009Z"
          fill={color || '#375C0A'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_181_542">
          <Rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0 0.925903)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default TimeCheckIcon;
