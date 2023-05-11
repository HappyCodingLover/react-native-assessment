import React, { createContext, useContext, useState } from 'react';
import { Slide, Icon, HStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import P from 'components';

type ToastType = 'success' | 'warning' | 'danger' | 'info' | 'default';

type ToastParams = {
  message: string;
  type?: ToastType;
  timeToHide?: number;
};

const bg = {
  default: 'primary.300',
  success: 'success.600',
  warning: 'warning.600',
  danger: 'danger.600',
  info: 'highlight.600',
};

const icon = {
  default: '',
  success: 'check',
  warning: 'warning',
  danger: 'error-outline',
  info: 'info-outline',
};

export interface ToastInterface {
  showToast: ((params: ToastParams) => void) | null;
  hideToast: (() => void) | null;
}

const defaultValue: ToastInterface = {
  showToast: null,
  hideToast: null,
};

export const Toast = createContext<ToastInterface>(defaultValue);

export const ToastProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<ToastType>('default');

  const showToast = (params: ToastParams) => {
    setMessage(params.message);
    setType(params.type || 'default');
    const timeToHide = params.timeToHide || 3000;

    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, timeToHide);
  };

  const hideToast = () => {
    setIsOpen(false);
  };

  return (
    <Toast.Provider value={{ showToast, hideToast }}>
      {children}
      <Slide in={isOpen} placement="top">
        <HStack
          safeAreaTop
          px="4"
          pb="2"
          bg={bg[type]}
          space="3"
          alignItems="center">
          {!!icon[type] && (
            <Icon as={MaterialIcons} name={icon[type]} size="6" color="white" />
          )}
          <P sz="medium" color="white" flex="1">
            {message}
          </P>
        </HStack>
      </Slide>
    </Toast.Provider>
  );
};

export const useToast = () => {
  const { showToast, hideToast } = useContext(Toast);

  if (!showToast || !hideToast) {
    throw new Error('useFilter must be inside of the ToastProvider');
  }

  return { showToast, hideToast };
};
