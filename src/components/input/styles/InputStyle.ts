import { css } from '@emotion/react';
import { resetStyle } from 'styles/reset';

const InputContainerStyle = css`
  font-size: 16px;
  line-height: 24px;

  input {
    ${resetStyle};
    font-size: inherit;
    line-height: inherit;
    background-color: #fff;
    width: 100%;
    height: 40px;
    font-weight: 400;
    padding: 12px 16px;
    color: #1f1f2c;
    outline: 0;
    border: 1px solid #1f1f2c;

    &::placeholder {
      color: #1f1f2c;
      opacity: 0.5;
    }
  }
`;

const inputLabelStyle = css`
  position: relative;
  ${resetStyle};
  display: block;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 4px;

  .asterisk {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
  .label-title {
    padding-left: 6px;
  }
`;
const inputDescription = css`
  ${resetStyle};
  margin-bottom: 4px;
  display: block;
  font-size: 14px;
  line-height: 18px;
  color: #2a2a2a;
`;

export { InputContainerStyle, inputLabelStyle, inputDescription };
