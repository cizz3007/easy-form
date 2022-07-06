import { css } from '@emotion/react';
import { IconSize } from '@src/components/icon/types/icon.type';
import { preventDragStyle, resetStyle } from 'styles/reset';

function renderSize(size: keyof IconSize) {
  switch (size) {
    case 'Medium':
      return 'min-width:24px; min-height:24px;';
    case 'Large':
      return 'min-width:32px; min-height:32px;';
    case 'Small':
      return 'min-width:16px; min-height:16px;';
    default:
      return 'min-width:24px; min-height:24px;';
  }
}

const iconComponentStyle = (size: keyof IconSize, image: string) => css`
  ${resetStyle};
  ${preventDragStyle};
  display: inline-block;
  ${renderSize(size)};
  background: url('${image}') no-repeat center/cover;
`;

export { iconComponentStyle };
