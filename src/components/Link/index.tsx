import React from 'react';
import styles from './index.module.scss';

export interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  text: string;
  platter: boolean;
}

export const Link = ({ text, platter, ...props }: LinkProps) => {
  return (
    <a data-platter={platter} {...props} className={styles.link}>
      {text}
    </a>
  );
};

Link.displayName = 'Link';
