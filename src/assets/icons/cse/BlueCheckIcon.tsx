import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const BlueCheckIcon = (props: SvgProps) => (
  <Svg
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
    viewBox="0 0 20 20"
    {...props}>
    <Path
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BlueCheckIcon;
