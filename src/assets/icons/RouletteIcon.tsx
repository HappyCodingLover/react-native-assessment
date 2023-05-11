import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

import { ITextProps } from 'native-base';

type Props = ITextProps & {
  color?: string;
};
export const RouletteIcon = ({ color }: Props) => (
  <Svg width="26" height="33" viewBox="0 0 26 33" fill={color}>
    <Path
      fill={color}
      d="M6.677 8.095h-.2V4.857A4.857 4.857 0 0 1 11.332 0h3.238a4.857 4.857 0 0 1 4.858 4.857v3.238h-.201a12.949 12.949 0 0 1 6.677 11.334v8.095a4.857 4.857 0 0 1-4.857 4.857H4.858A4.857 4.857 0 0 1 0 27.524v-8.095c0-4.877 2.694-9.125 6.677-11.334Zm3.037-3.238v2.027a12.975 12.975 0 0 1 6.476 0V4.857a1.62 1.62 0 0 0-1.619-1.619h-3.238a1.619 1.619 0 0 0-1.619 1.62Zm0 9.714a1.62 1.62 0 0 0 1.62 1.62h3.237a1.62 1.62 0 0 0 0-3.239h-3.238a1.619 1.619 0 0 0-1.619 1.62Zm-1.619 8.096a1.619 1.619 0 1 0 0 3.238h9.714a1.62 1.62 0 0 0 0-3.238H8.095Z"
    />
  </Svg>
);
export default RouletteIcon;
