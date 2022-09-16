import { css } from '@emotion/react';
import { MIX_IN_TRANSITION_LINEAR } from '@styles/mixin';

const flexStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const tileHoverStyle = css`
  &:hover {
    background-color: darkgray;
    border-radius: 50%;
  }
`;
const defaultTileStyle = css`
  text-align: center;
  flex-basis: 14.2857%;
  max-width: 14.2857%;
  line-height: 40px;
  overflow: hidden;
  font-size: 14px;
  color: lightgray;

  > .contents-area {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 40px;
    height: 40px;
    ${tileHoverStyle};
  }
`;

const calendarLayoutStyle = css`
  background-color: transparent;
  border-radius: 4px;

  .tiles {
    ${defaultTileStyle};
    font-weight: 700;
  }
`;

const innerLayout = css`
  min-width: 336px;
  box-sizing: content-box;
  min-height: 288px;
  padding: 46px;
`;
const dayBoxStyle = css`
  flex-wrap: wrap;

  .default {
    position: relative;
    background-color: transparent;
    border: 0;
    color: #333;

    &.transit {
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: whitesmoke;
      }
    }
  }
`;

const calendarTitleStyle = css`
  flex: 1;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
`;
const calendarButtonStyle = css`
  flex-basis: 10.18%;
  max-width: 34px;
  height: 34px;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin: 0;

  > i {
    ${MIX_IN_TRANSITION_LINEAR};
    &:hover {
      transform: scale(1.25);
    }
  }
`;
const calendarContainerStyle = css`
  margin-top: 17px;
  min-height: 288px;
`;
const dayButtonStyle = css`
  ${defaultTileStyle};
  transition: background-color, color 0.22s ease-in-out;

  &.selected {
    position: relative;
    background-color: transparent;
    border: 0;

    // 시작
    &.start {
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        display: block;
        width: 50%;
        height: 100%;
        background-color: whitesmoke;
      }
    }
    // 종료
    &.end {
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        display: block;
        width: 50%;
        height: 100%;
        background-color: whitesmoke;
      }
    }
    // 낀 날짜
    &.transit {
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: whitesmoke;
      }
    }

    > .contents-area {
      background-color: cornflowerblue;
      color: white;
      border-radius: 50%;
    }
  }
`;
const extraButtonContainerStyle = css`
  > button {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const extraButtonStyle = css`
  color: blue;
  padding: 6px 8px;
  border: 1px solid blue;
`;

const contentsAreaStyle = css`
  text-align: right;
  padding: 10px;
`;

export {
  calendarLayoutStyle,
  innerLayout,
  dayBoxStyle,
  flexStyle,
  dayButtonStyle,
  calendarTitleStyle,
  calendarButtonStyle,
  calendarContainerStyle,
  extraButtonContainerStyle,
  extraButtonStyle,
  contentsAreaStyle
};
