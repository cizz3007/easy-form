import { useForm } from 'react-hook-form';
import { ForwardedRef, forwardRef } from 'react';
import { formContainerStyle } from '@src/components/form/styles/formStyle';

export declare type FormValidationMode = {
  /**
   * Blur 일때 검사
   */
  onBlur: 'onBlur';
  /**
   *값이 변경 될 때마다 검사
   */
  onChange: 'onChange';
  /**
   * 값이 submit 될떄 검사
   */
  onSubmit: 'onSubmit';
  onTouched: 'onTouched';
  /**
   *모든 경우에 검사 (Default)
   */
  all: 'all';
};

type FieldInputComponent = {
  Input: 'input';
  Select: 'select';
  Range: 'range';
  Number: 'number';
};

interface FormInputStructure {
  component: keyof FieldInputComponent;
  defaultValue?: any;
}
interface FormProps {
  onSubmit: (args: any) => any;
  id?: string;
  validationMode?: keyof FormValidationMode;
  data: FormInputStructure[];
}

type FormData = {
  [key: string]: string;
};

const Form = forwardRef(
  (
    { onSubmit, id, validationMode = 'all', data = [] }: FormProps,
    ref: ForwardedRef<HTMLFormElement>
  ): JSX.Element => {
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<FormData>({
      mode: validationMode
    });

    // console.log(watch('example')); // watch input value by passing the name of it
    console.log(errors);
    console.log(data);
    return (
      <form onSubmit={handleSubmit(onSubmit)} id={id} ref={ref} css={formContainerStyle}>
        <input defaultValue={'test'} {...register('example')} />
        {/*<input*/}
        {/*  {...register('exampleRequired', {*/}
        {/*    required: 'requried!!!',*/}
        {/*    validate: {*/}
        {/*      positive: (v) => parseInt(v) > 0 || 'should be greater than 0',*/}
        {/*      lessThanTen: (v) => parseInt(v) < 10 || 'should be lower than 10',*/}
        {/*      messages: (v) => !v && ['test', 'test2']*/}
        {/*    }*/}
        {/*  })}*/}
        {/*/>*/}
        {/*<select {...register('gender')}>*/}
        {/*  <option value="female">female</option>*/}
        {/*  <option value="male">male</option>*/}
        {/*  <option value="other">other</option>*/}
        {/*</select>*/}
        {/*{errors.exampleRequired && <span>{errors.exampleRequired.message}</span>}*/}
        {/*<button type="submit">제출</button>*/}
      </form>
    );
  }
);

export default Form;
