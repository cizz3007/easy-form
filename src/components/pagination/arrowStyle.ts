import { css } from '@emotion/react';
import { ArrowIconProps } from '@src/components/pagination/ArrowIcon';

function renderDirection(direction: ArrowIconProps['direction']) {
  switch (direction) {
    case 'right':
      return 'transform:rotate(180deg)';
    case 'up':
      return 'transform:rotate(90deg)';
    case 'down':
      return 'transform:rotate(270deg)';
    case 'left':
      return 'transform:rotate(0deg)';
    default:
      return 'transform:rotate(0deg)';
  }
}
const arrowDirectionStyle = (direction: ArrowIconProps['direction']) => css`
  ${renderDirection(direction)}
`;

export { arrowDirectionStyle };
