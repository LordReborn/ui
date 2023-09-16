import React from 'react';
import { Icon, IconName } from '../Icon';
import styles from './index.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon_name: IconName;
  size: 's' | 'm' | 'l';
  disabled: boolean;
  platter: boolean;
  rounded: boolean;
  label: string;
}

const width = { s: 22, m: 28, l: 32 };

export const Button = ({
  icon_name,
  size = 'm',
  disabled,
  platter,
  rounded,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      data-size={size}
      data-platter={platter}
      data-rounded={rounded}
      className={styles.button}
      type="button"
    >
      {icon_name && (
        <Icon name={icon_name} color="inherit" size={width[size]} />
      )}
      <span>{label}</span>
    </button>
  );
};

Button.displayName = 'Button';
