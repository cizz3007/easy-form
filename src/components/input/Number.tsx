import { numberInputErrorStyle, numberInputStyle } from './styles/numberStyle';
import Text from '@src/components/typography/Text';
import { ForwardedRef, forwardRef, ForwardRefExoticComponent, HTMLAttributes } from 'react';

interface NumberInputComponentProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  readOnly: boolean;
  value: string | number;
  ref?: ForwardRefExoticComponent<any>;
  errorMessage?: string;
  limit: number;
  suffix?: string | boolean;
  active?: boolean;
  enableErrorMessage?: boolean;
  onChange?: (value: any) => any;
  onFocus?: (value: any) => any;
  onBlur?: (value: any) => any;
}

const Number = forwardRef(
  (
    {
      className,
      id,
      style,
      name,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      suffix,
      readOnly = false,
      value,
      enableErrorMessage = true,
      errorMessage,
      limit,
      ...rest
    }: NumberInputComponentProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <div
          id={id}
          style={style}
          className={className}
          css={numberInputStyle({
            hasMisc: !!suffix
          })}
        >
          <input
            {...rest}
            id={id}
            name={name}
            ref={ref}
            type={'number'}
            max={limit}
            min={0}
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            autoComplete={'none'}
            autoFocus={false}
            autoSave={'none'}
            autoCapitalize={'none'}
            aria-autocomplete={'none'}
            autoCorrect={'none'}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {suffix && <span className={'suffix'}>{suffix}</span>}
        </div>
        {enableErrorMessage && errorMessage && (
          <Text type={'Warn'} css={numberInputErrorStyle}>
            {errorMessage}
          </Text>
        )}
      </div>
    );
  }
);

export default Number;
