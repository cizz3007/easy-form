import { inputLabelStyle } from '../styles/InputStyle';

interface InputLabel {
  title: string;
  htmlFor: string;
  required: boolean;
}

const InputLabel = ({ htmlFor, title, required = false }: InputLabel) => {
  return (
    <label htmlFor={htmlFor} css={inputLabelStyle}>
      {required && (
        <span className={'asterisk'} style={{ color: 'red', fontWeight: 'bold' }}>
          *
        </span>
      )}
      <span className={'label-title'}>{title}</span>
    </label>
  );
};

export default InputLabel;
