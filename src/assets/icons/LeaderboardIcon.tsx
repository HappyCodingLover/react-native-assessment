import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ITextProps } from 'native-base';

type Props = ITextProps & {
  color?: string;
};
export const LeaderboardIcon = ({ color }: Props) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <Path
      fill={color}
      d="M24.889 0H3.11A3.12 3.12 0 0 0 0 3.111V24.89A3.12 3.12 0 0 0 3.111 28H24.89A3.12 3.12 0 0 0 28 24.889V3.11A3.12 3.12 0 0 0 24.889 0ZM9.333 21.778h-3.11v-10.89h3.11v10.89Zm6.223 0h-3.112V6.222h3.112v15.556Zm6.222 0h-3.111v-6.222h3.11v6.222Z"
    />
  </Svg>
);
export default LeaderboardIcon;
