import { ForwardedRef, forwardRef, HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { InputContainerStyle } from '@src/components/input/styles/InputStyle';
import InputLabel from '@src/components/input/misc/InputLabel';
import InputDescription from '@src/components/input/misc/InputDescription';
import Flex from '@src/components/layout/Flex';
import Icon from '@src/components/icon';

const { Close } = Icon;

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: Extract<HTMLInputTypeAttribute, 'text' | 'email' | 'number'>;
  name: string;
  id?: string;
  defaultValue?: any;
  className?: string;
  title?: string;
  description?: string;
  onChange?: (value: any) => any;
  onFocus?: (value: any) => any;
  onBlur?: (value: any) => any;
  required?: boolean;
  activeResetButton?: boolean;
}

const Input = forwardRef(
  (
    {
      id,
      name,
      type,
      onChange,
      onFocus,
      onBlur,
      className,
      required = false,
      title,
      description,
      defaultValue,
      activeResetButton = false,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div css={InputContainerStyle} className={className}>
        {title && <InputLabel title={title} htmlFor={id + name} required={required} />}
        {description && <InputDescription text={description} />}
        <Flex alignItems={'center'} className={'input-box'}>
          <input
            {...rest}
            defaultValue={defaultValue}
            type={type}
            ref={ref}
            id={id + name}
            name={name}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {activeResetButton && <Close size={'Medium'} />}
        </Flex>
      </div>
    );
  }
);

export default Input;
