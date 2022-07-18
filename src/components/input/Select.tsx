import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

type SelectOptions = {
  [key: string]: any;
};

interface SelectComponentProps extends HTMLAttributes<HTMLInputElement> {
  options: SelectOptions[];
}

const Select = forwardRef(
  ({ id }: SelectComponentProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <div id={id}>
        <input ref={ref} type={'select'} />
      </div>
    );
  }
);

export default Select;
