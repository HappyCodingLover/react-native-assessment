import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
export const YellowCheckIcon = (props: SvgProps) => (
  <Svg {...props} width="27" height="26" viewBox="0 0 37 36" fill="none">
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M2.853 0h30.583c1.498.007 2.708 1.013 2.708 2.25v9.395c.043 10.153-6.72 19.493-17.573 24.268a1.066 1.066 0 0 1-.852-.002C6.867 31.14.102 21.798.145 11.644V2.25C.145 1.013 1.355.007 2.853 0Zm13.113 21.968 12.897-10.05c.472-.369.67-.917.52-1.439-.151-.521-.627-.937-1.25-1.09-.622-.153-1.296-.02-1.767.348l-11.617 9.04-3.056-2.55c-.453-.391-1.127-.55-1.763-.415-.636.134-1.134.542-1.303 1.065-.17.524.016 1.082.485 1.46l4.31 3.595c.695.581 1.826.597 2.544.036Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={5.32}
        x2={37.248}
        y1={34.313}
        y2={-7.221}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#E75232" />
        <Stop offset={1} stopColor="#FDD710" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default YellowCheckIcon;
