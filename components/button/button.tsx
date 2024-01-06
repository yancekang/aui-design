import classNames from 'classnames';
import React from 'react';
import type { ButtonHTMLType, ButtonType } from './button.d';
import './button.scss';
// import { ConfigContext } from './context';
export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  // shape?: ButtonShape;
  // size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  [key: `data-${string}`]: string;
  classNames?: { icon: string };
  styles?: { icon: React.CSSProperties };
}
type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type'
>;

export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {
  href?: string;
  htmlType?: ButtonHTMLType;
}

export default function Button(props: ButtonProps) {
  const { type } = props;
  // const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = 'aui';
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
  });
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    const { onClick } = props;
    // FIXME: https://github.com/ant-design/ant-design/issues/30207
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };
  return (
    <button className={classes} type="button" onClick={handleClick}>
      {props.children}
    </button>
  );
}
