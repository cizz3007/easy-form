import { css } from '@emotion/react';
import { fontWeightRegular, theme } from '@styles/commonStyle';
import { MIX_IN_FONT_FAMILY_NOTO_SANS, MIX_IN_TRANSITION_LINEAR } from '@styles/mixin';
import { TextComponentProps } from '@src/components/atoms/typography/Text';

const errorStyle = css`
  ${MIX_IN_FONT_FAMILY_NOTO_SANS};
  font-size: 12px;
  line-height: 12px;
  color: #ff3d00;
  font-weight: ${fontWeightRegular};
  ${MIX_IN_TRANSITION_LINEAR};
`;
const defaultStyle = css`
  color: ${theme.primaryFontColor};
`;
const textComponentStyle = ({ type }: TextComponentProps) => css`
  ${MIX_IN_FONT_FAMILY_NOTO_SANS};
  word-break: break-all;
  ${type === 'Warn' ? errorStyle : defaultStyle}
`;

export { textComponentStyle };
