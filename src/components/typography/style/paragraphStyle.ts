import { css } from '@emotion/react';
import { fontWeightMedium, theme } from '@styles/commonStyle';
import { ParagraphProps, ParagraphType } from '@src/components/atoms/typography/Paragraph';

function renderType(type: ParagraphType) {
  switch (type) {
    case 'primary':
      return theme.primary;
    default:
      return theme.primaryFontColor;
  }
}

const paragraphStyle = ({
  type = 'default',
  fontSize = 14,
  lineHeight = 18,
  color,
  fontWeight = fontWeightMedium
}: ParagraphProps) => css`
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  font-weight: ${fontWeight};
  color: ${color ? color : renderType(type)};
`;

export { paragraphStyle };
