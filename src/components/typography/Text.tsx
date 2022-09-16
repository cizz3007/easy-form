import { CSSProperties, ReactNode } from 'react';
import { textComponentStyle } from '@src/components/typography/style/textStyle';

export type TextType = 'Default' | 'Warn';

export interface TextComponentProps {
  type: TextType;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

function Text({ children, type, className, style }: TextComponentProps) {
  return (
    <p className={className} css={textComponentStyle({ type: type })} style={style}>
      {children}
    </p>
  );
}

export default Text;
