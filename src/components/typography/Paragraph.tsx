import { paragraphStyle } from './style/paragraphStyle';
import { ForwardedRef, forwardRef, ReactNode } from 'react';

type FontWeightType = 400 | 500 | 600 | 700 | 800 | 900;

export type ParagraphType = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warn' | 'fail';

export interface ParagraphProps {
  fontWeight?: FontWeightType;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  type?: ParagraphType;
  children?: ReactNode;
}

const Paragraph = forwardRef(
  (
    {
      fontWeight,
      fontSize,
      lineHeight,
      className,
      id,
      children,
      type,
      style,
      onClick,
      color,
      ...rest
    }: ParagraphProps,
    ref: ForwardedRef<HTMLParagraphElement>
  ) => {
    return (
      <p
        {...rest}
        css={paragraphStyle({
          fontWeight,
          fontSize,
          lineHeight,
          type,
          color
        })}
        className={className}
        id={id}
        style={style}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </p>
    );
  }
);

export default Paragraph;
