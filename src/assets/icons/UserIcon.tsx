import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
type Props = ITextProps & {
  color?: string;
};
export const UserIcon = ({ color }: Props) => (
  <Svg width="28" height="28" viewBox="0 0 36 36" fill={color}>
    <Path
      fill={color}
      d="M3.625 35.25S.75 35.25.75 32.375s2.875-11.5 17.25-11.5 17.25 8.625 17.25 11.5-2.875 2.875-2.875 2.875H3.625ZM18 18A8.625 8.625 0 1 0 18 .75 8.625 8.625 0 0 0 18 18Z"
    />
  </Svg>
);
export default UserIcon;
