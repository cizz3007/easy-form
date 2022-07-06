import { css } from '@emotion/react';
import { ButtonSize, ButtonTheme } from '@src/components/button';
import { ButtonShape } from '@src/components/button/types/button.type';

function renderTheme(theme: ButtonTheme) {
  switch (theme) {
    case 'default':
      return 'background-color:#0070f3; color:#fff;';
    case 'primary':
      return 'background-color:yellow; color:black;';
    default:
      return 'background-color:black; color:white;';
  }
}

function renderSize(size: ButtonSize) {
  switch (size) {
    case 'small':
      return 'min-width: 42px;padding: 0 6px;height: 30px;border-radius: 4px;';
    case 'extraSmall':
      return 'min-width: 42px;padding: 0 6px;height: 30px;border-radius: 4px;';
    case 'large':
      return 'min-width: 42px;padding: 0 6px;height: 30px;border-radius: 4px;';
    case 'extraLarge':
      return 'min-width: 42px;padding: 0 6px;height: 30px;border-radius: 4px;';
    default:
      return 'min-width: 42px;padding: 0 6px;height: 30px;border-radius: 4px;';
  }
}
const buttonStyle = ({
  fit,
  theme,
  size
}: {
  fit: boolean;
  theme: ButtonTheme;
  shape: ButtonShape;
  size: ButtonSize;
}) => css`
  cursor: pointer;
  margin: 0;
  border: 0;
  outline: 0;
  ${renderTheme(theme)};
  ${renderSize(size)};
  ${fit && `width:100%`};
`;

export { buttonStyle };
