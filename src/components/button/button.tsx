import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { ButtonShape, ButtonSize, ButtonTheme } from '@src/components/button/type/button.type';
import { buttonStyle } from '@src/components/button/style/buttonStyle';

interface ButtonComponent extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  theme: ButtonTheme;
  shape?: ButtonShape;
  fit?: boolean;
  loading?: boolean;
}

const Button = forwardRef((props: ButtonComponent, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    size = 'medium',
    type = 'button',
    fit = false,
    loading = false,
    shape = 'square',
    theme = 'default',
    id,
    className,
    disabled = false,
    children,
    ...rest
  } = props;

  return (
    <button
      {...(rest as ButtonComponent)}
      ref={ref}
      className={className}
      disabled={disabled}
      id={id}
      type={type}
      css={buttonStyle({
        fit: fit,
        size: size,
        theme: theme,
        shape: shape
      })}
    >
      {loading ? loading : children}
    </button>
  );
});

export default Button;
