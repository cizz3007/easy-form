import { css } from '@emotion/react';
import { theme } from '@src/commonStyle';
import { SearchInputProps } from '@src/components/atoms/input/Search';
import { MIX_IN_DISPLAY_FLEX_CENTER, MIX_IN_DRAG_NONE } from '@styles/mixin';

const numberInputConfig = {
  height: {
    L: 60,
    M: 38,
    S: 40
  },
  fontSize: {
    L: 18,
    M: 14,
    S: 12
  },
  lineHeight: {
    L: 22,
    M: 19,
    S: 16
  },
  radius: {
    L: 30,
    M: 25,
    S: 20
  }
} as const;

interface NumberInputStyleProps extends Partial<SearchInputProps> {
  hasMisc: string | boolean;
}
const miscStyle = css`
  padding: 0 8px !important;
  ${MIX_IN_DISPLAY_FLEX_CENTER};
`;

const numberInputStyle = ({ size = 'M', hasMisc = false }: NumberInputStyleProps) => css`
  position: relative;
  border: 1px solid ${theme.inputBorderColor};
  background-color: ${theme.inputBgColor};
  border-radius: 4px;
  ${hasMisc && miscStyle};

  input {
    width: 100%;
    border: none;
    font-family: 'Noto Sans', sans-serif;
    padding: 0 10px;
    height: ${numberInputConfig.height[size]}px;
    font-size: ${numberInputConfig.fontSize[size]}px;
    line-height: ${numberInputConfig.height[size]}px;
    color: ${theme.inputFontColor};
    outline: none;
    background-color: transparent;

    &:valid {
      color: ${theme.fontWhiteColor};
    }
    &::placeholder {
      color: ${theme.inputFontColor};
      font-size: ${numberInputConfig.fontSize[size]}px;
    }

    &:hover,
    &:focus {
      color: ${theme.inputFocusColor};
    }

    &:focus {
      border: 1px solid ${theme.inputPrimaryColor} !important;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
  //suffix
  > span.suffix {
    color: ${theme.fontWhiteColor};
    ${MIX_IN_DRAG_NONE};
  }
`;

const numberInputErrorStyle = css`
  margin-top: 5px;
  padding: 0 5px;
`;
const inputStyle = css``;
export { numberInputStyle, numberInputErrorStyle, inputStyle };
