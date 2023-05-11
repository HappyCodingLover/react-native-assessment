import * as React from 'react';
import { ITextProps } from 'native-base';
import Svg, { Path } from 'react-native-svg';

type Props = ITextProps & {
  color?: string;
};

export const FindEvaluationIcon = ({ color }: Props) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill={color}>
    <Path
      fill={color}
      d="M10.5 0H1.167C.523 0 0 .521 0 1.167V10.5c0 .645.523 1.167 1.167 1.167H10.5c.644 0 1.167-.522 1.167-1.167V1.167C11.667.52 11.144 0 10.5 0ZM26.832 0h-9.333c-.644 0-1.167.521-1.167 1.167V10.5c0 .645.523 1.167 1.167 1.167h9.333c.644 0 1.167-.522 1.167-1.167V1.167C27.999.52 27.476 0 26.832 0ZM10.5 16.332H1.167c-.644 0-1.167.521-1.167 1.167v9.333c0 .645.523 1.167 1.167 1.167H10.5c.644 0 1.167-.522 1.167-1.167v-9.333c0-.645-.523-1.167-1.167-1.167ZM26.832 16.332h-9.333c-.644 0-1.167.521-1.167 1.167v9.333c0 .645.523 1.167 1.167 1.167h9.333c.644 0 1.167-.522 1.167-1.167v-9.333c0-.645-.523-1.167-1.167-1.167Z"
    />
  </Svg>
);
export default FindEvaluationIcon;
