import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const ParentIcon = (props: SvgProps) => (
  <Svg width="52" height="52" viewBox="0 0 52 52" fill="none" {...props}>
    <Path
      stroke="#0A3254"
      strokeWidth={1.4}
      d="M2.095 18.233 26 .865l23.905 17.368-9.131 28.101H11.226l-9.13-28.101Z"
    />
    <Path
      fill="#0A3254"
      fillRule="evenodd"
      d="M19.72 28.887a4.167 4.167 0 0 1 2.947-1.22h6.666a4.167 4.167 0 0 1 4.167 4.166V33.5a.833.833 0 1 1-1.667 0v-1.667a2.5 2.5 0 0 0-2.5-2.5h-6.666a2.5 2.5 0 0 0-2.5 2.5V33.5a.833.833 0 1 1-1.667 0v-1.667c0-1.105.439-2.165 1.22-2.946ZM26 19.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.167 2.5a4.167 4.167 0 1 1 8.334 0 4.167 4.167 0 0 1-8.334 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ParentIcon;
