import { css } from '@emotion/react';

const resetStyle = css`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  font: inherit;
  color: inherit;
  vertical-align: baseline;
`;
const preventDragStyle = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export { resetStyle, preventDragStyle };
