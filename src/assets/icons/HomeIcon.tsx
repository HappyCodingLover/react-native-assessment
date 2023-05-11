import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs } from 'react-native-svg';
import { ITextProps } from 'native-base';

type Props = ITextProps & {
  color?: string;
};
export const HomeIcon = ({ color }: Props) => (
  <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <G fill={color} filter="url(#a)">
      <Path d="M14.889 18.797h6.222v9.802h-6.222v-9.802Z" />
      <Path d="M31.098 13.448 19.105 2.414a1.575 1.575 0 0 0-.507-.306 1.706 1.706 0 0 0-1.196 0c-.19.07-.362.175-.506.306L4.902 13.463c-.29.263-.519.576-.674.92A2.557 2.557 0 0 0 4 15.464v11.734c-.001.717.303 1.407.85 1.928A3.267 3.267 0 0 0 6.94 30h4.838V17.397c0-.371.164-.727.455-.99.292-.262.688-.41 1.1-.41h9.334c.412 0 .808.148 1.1.41.291.263.455.619.455.99V30h4.838a3.267 3.267 0 0 0 2.09-.873c.547-.52.851-1.21.85-1.928V15.465c.001-.752-.322-1.475-.902-2.017Z" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default HomeIcon;
