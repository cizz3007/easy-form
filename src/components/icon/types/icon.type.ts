import { HTMLAttributes } from 'react';

export type IconSize = {
  Small: 'small';
  Medium: 'medium';
  Large: 'large';
};

export interface IconComponentProps extends HTMLAttributes<HTMLSpanElement> {
  size?: keyof IconSize;
  image?: string;
}
