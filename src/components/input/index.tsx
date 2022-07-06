import BaseInput, { InputProps } from './Input';
import { ForwardRefExoticComponent } from 'react';

interface CompoundedComponent extends ForwardRefExoticComponent<InputProps> {
  Default: typeof BaseInput;
}

const Input = BaseInput as CompoundedComponent;

Input.Default = BaseInput;

export default Input;
