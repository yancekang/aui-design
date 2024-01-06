import React from 'react';
import type { ButtonProps } from './button';

export const defaultIconPrefixCls = 'anticon';

export interface ComponentStyleConfig {
  className?: string;
  style?: React.CSSProperties;
}

export interface ButtonConfig extends ComponentStyleConfig {
  classNames?: ButtonProps['classNames'];
  styles?: ButtonProps['styles'];
}

export interface ConfigConsumerProps {
  button?: ButtonConfig;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `aui-${suffixCls}` : 'aui';
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  // iconPrefixCls: defaultIconPrefixCls,
});
