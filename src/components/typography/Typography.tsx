import React from 'react';

export interface TypographyProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ['aria-label']?: string;
}

interface InternalTypographyProps extends TypographyProps {
  component?: string;
}

const Typography = ({
  component = 'article',
  className,
  'aria-label': ariaLabel,
  children,
  ...props
}: InternalTypographyProps): JSX.Element => {
  const Component = component as any;

  return (
    <Component className={className} aria-label={ariaLabel} {...props}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default Typography;
