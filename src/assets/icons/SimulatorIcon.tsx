import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const SimulatorIcon = (props: SvgProps) => (
  <Svg {...props} width="30" height="24" viewBox="0 0 40 32" fill="none">
    <Path
      fill="#EA7000"
      d="M10 32h20V0H10v32ZM0 27.733h8V4.267H0v23.466ZM32 4.267v23.466h8V4.267h-8Z"
    />
  </Svg>
);
export default SimulatorIcon;
