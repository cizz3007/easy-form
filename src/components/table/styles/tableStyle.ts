import { css } from '@emotion/react';

const tableLayoutStyle = css`
  position: relative;
  margin-bottom: 60px;
  background-color: #fff;
`;
const tableStyle = css`
  width: 100%;
`;
const tableHeadStyle = css``;
const thStyle = css`
  padding: 16px 16px;
  position: relative;
  color: #222;
  font-weight: 600;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0.4px;
  background: #eee;
  overflow-wrap: break-word;

  &:not(:last-child):before {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #eaeaea;
    transform: translateY(-50%);
    transition: background-color 0.3s;
    content: '';
  }
`;
const trStyle = (isHoverMode: boolean) => css`
  border-bottom: 1px solid #f0f0f0;
  ${isHoverMode &&
  `
    cursor:pointer;
    
    &:hover {
      background-color:#eee;
    }
  `};
`;
const tableBodyStyle = css``;

const tdStyle = css`
  text-align: center;
  position: relative;
  padding: 16px 16px;
  transition: background 0.3s;
  overflow-wrap: break-word;
  font-size: 12px;

  &.no-data {
    color: red;
    text-decoration: underline;
    opacity: 0.3;
  }
`;

export { tableLayoutStyle, tableStyle, tableHeadStyle, thStyle, trStyle, tableBodyStyle, tdStyle };
