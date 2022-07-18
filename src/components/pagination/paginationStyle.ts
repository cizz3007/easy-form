import { css } from '@emotion/react';
import { fontWeightMedium } from '@styles/commonStyle';
import { MIX_IN_DISPLAY_INLINE_FLEX_CENTER, MIX_IN_DRAG_NONE, MIX_IN_TRANSITION_LINEAR } from '@styles/mixin';
import { LinksProps } from '@src/components/atoms/pagination/type/pagination.type';

const linkStyle = ({ shortcut, current, before, after, lastPage, noMargin, disabled }: LinksProps) => css`
  margin: auto 16px;
  font-size: 16px;
  color: #222;
  background-color: #fff;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  ${MIX_IN_DISPLAY_INLINE_FLEX_CENTER};
  font-weight: ${fontWeightMedium};
  ${MIX_IN_TRANSITION_LINEAR};
  will-change: all;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${disabled &&
  `
    opacity: 0;
    cursor: none;
    pointer-events: none;  
  `}

  ${shortcut &&
  `
     letter-spacing: -2px;
     background-color: #eaeaea;
     box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
     width:32px;
     height:32px;
  `};
  ${noMargin && `margin-right:0;`};
  ${lastPage && ``};
  ${before && ``};
  ${after && ``};
  ${current
    ? `
    position: relative;
    background-color: #eee;
    color: #fff;
    opacity: 1;
    @include easeOutSine(0.33);

    &:focus {
      outline: none;
    }
  `
    : `&:hover {
      background-color: gray;
    }`};
`;

const dotdotdotStyle = ({ active }: { active: boolean }) => css`
  font-size: 20px;
  font-weight: ${fontWeightMedium};
  will-change: all;
  min-height: 30px;
  ${MIX_IN_DISPLAY_INLINE_FLEX_CENTER};
  ${MIX_IN_TRANSITION_LINEAR};
  ${active ? 'opacity:1;' : 'opacity:0;width:0;margin:0;'};
`;

const paginationLinkContainerStyle = css`
  text-align: center;
  vertical-align: bottom;
  position: relative;
  display: inline-block;
  ${MIX_IN_DRAG_NONE};
`;

export { linkStyle, dotdotdotStyle, paginationLinkContainerStyle };
