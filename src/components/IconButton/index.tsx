import React from 'react';
import { Icon, IconName } from '../Icon';
import styles from './index.module.scss';

export interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  height: 'xs' | 's' | 'm' | 'l' | 'xl';
  icon_name: IconName;
  disabled: boolean;
  platter: boolean;
}

const width = { xs: 14, s: 16, m: 22, l: 25, xl: 32 };

export const IconButton = ({
  height = 'm',
  icon_name,
  disabled,
  platter,
  ...props
}: IconButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      data-size={height}
      data-platter={platter}
      className={styles.button}
      type="button"
    >
      <Icon name={icon_name} color="inherit" size={width[height]} />
    </button>
  );
};

IconButton.displayName = 'IconButton';
