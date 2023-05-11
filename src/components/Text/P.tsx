import React from 'react';
import { Text, ITextProps } from 'native-base';
import { Colors } from 'config';

const sizes = {
  large: ['lg', 'md', 'lg'],
  medium: ['md', 'sm', 'md'],
  small: ['sm', 'xs', 'sm'],
  xsmall: ['xs', '2xs', 'xs'],
  tiny: ['3xs'],
};

type Props = ITextProps & {
  sz: 'large' | 'medium' | 'small' | 'xsmall' | 'tiny';
  px?: string;
};

export const P = ({ children, sz, px, ...rest }: Props) => {
  return (
    <Text
      px={px}
      fontSize={sizes[sz]}
      fontWeight="normal"
      color={Colors.primary.orange}
      {...rest}>
      {children}
    </Text>
  );
};

export default P;
