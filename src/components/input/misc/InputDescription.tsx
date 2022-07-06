import { inputDescription } from '@src/components/input/styles/InputStyle';

const InputDescription = ({ text }: { text?: string }) => {
  return <span css={inputDescription}>{text}</span>;
};

export default InputDescription;
