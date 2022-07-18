import { MouseEventHandler } from 'react';

export interface LinksProps {
  shortcut?: boolean;
  direction?: 'left' | 'right';
  before?: boolean;
  after?: boolean;
  noMargin?: boolean;
  lastPage?: boolean;
  current?: boolean;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  disabled?: boolean;
}
/**
 * @param className {String}
 * @param total {Number} : 표현될 데이터의 총 개수
 * @param limit {Number} 한 페이지네이션(page)에 보여줄 데이터의 최대 개수
 * @param count {Number} 보여질 페이지네이션 갯수
 * @param page {Number} 현재 페이지
 * @param fetchData {Function}  data 가져오기 위해 실행되는 함수
 * @param onChangePage {Function} 페이지네이션 클릭시 실행되는 함수
 * */
export interface PaginationType {
  className?: string;
  total: number;
  limit: number;
  count: number;
  page: number;
  dotMode?: boolean;
  onChangePage?(arg: number): void;
  fetchData?(arg: number): void;
}
