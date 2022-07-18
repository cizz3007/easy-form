import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { PaginationType } from '@src/components/pagination/type/pagination.type';
import Flex from '@src/components/layout/Flex';
import {
  dotdotdotStyle,
  linkStyle,
  paginationLinkContainerStyle
} from '@src/components/pagination/paginationStyle';
import ArrowIcon from '@src/components/pagination/ArrowIcon';
import DoubleArrowIcon from '@src/components/pagination/DoubleArrowIcon';

const Pagination: FC<PaginationType> = ({
  className,
  total = 300,
  limit = 20,
  count = 3,
  page = 0,
  onChangePage = () => {
    return null;
  },
  fetchData = () => {
    return null;
  },
  dotMode = true
}) => {
  //보여질 페이지네이션 갯수
  const [visibleCount] = useState(count);
  // 다음 페이지
  const getNextPage = useCallback(() => {
    const nextStep: number | boolean = Math.ceil(Number(total / limit)) === page + 1 ? false : page + 1;
    if (nextStep) {
      onChangePage && onChangePage(nextStep);
    }
  }, [page, onChangePage, total, limit]);
  //이전 페이지
  const getPrevPage = useCallback(() => {
    const prevStep = page > 0 ? page - 1 : page;
    onChangePage && onChangePage(prevStep);
  }, [page, onChangePage]);
  // 페이지 변경시 발생하는 이벤트
  useEffect(() => {
    fetchData && fetchData(page);
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: 0
    });
  }, [page, fetchData]);

  const paginations = useMemo(() => {
    const paginationsCount = Math.ceil(Number(total / limit));
    const arr: Array<number> = [];
    const o = Math.ceil((page + 1) / visibleCount); //..1,2,3

    if (page <= o * visibleCount) {
      const start = (o - 1) * visibleCount + 1;
      const loopLimit = o * visibleCount;

      for (let i = start; i <= loopLimit; i++) {
        if (i <= paginationsCount) {
          arr.push(Number(i));
        }
      }
    }
    return arr;
  }, [page, total, limit, visibleCount]);

  const prevCon = page <= 0;
  const lastPageNum = Math.ceil(Number(total / limit));
  const nextCon = page >= lastPageNum - 1;
  const leftDotCon = page >= visibleCount;
  const skip = Math.floor(lastPageNum / visibleCount);
  let gap = lastPageNum - skip * visibleCount;
  //하나면 하나를 빼고 두개면 두개를 뺴고, 3개면 3개를 뺀다
  //gap 차이가 0이면 3으로 임의로 준다..
  gap = gap === 0 ? 3 : gap;
  const rightDotCon = lastPageNum > visibleCount && page < lastPageNum - gap;

  return (
    <Flex className={className} justifyContent={'center'} alignItems={'center'}>
      {!dotMode && (
        <a
          css={linkStyle({
            shortcut: true,
            direction: 'left',
            disabled: false
          })}
          tabIndex={1}
          onClick={() => onChangePage && onChangePage(0)}
        >
          <DoubleArrowIcon direction={'left'} />
        </a>
      )}
      <a
        css={linkStyle({
          shortcut: true,
          direction: 'left',
          disabled: dotMode && prevCon
        })}
        tabIndex={1}
        onClick={debounce(() => {
          getPrevPage();
        }, 150)}
      >
        <ArrowIcon direction={'left'} />
      </a>
      <div css={paginationLinkContainerStyle}>
        {dotMode && leftDotCon && (
          <a
            css={linkStyle({
              current: false,
              after: false,
              before: false,
              lastPage: false
            })}
            tabIndex={1}
            onClick={() => onChangePage && onChangePage(0)}
          >
            1
          </a>
        )}
        {dotMode && (
          <span
            css={dotdotdotStyle({
              active: leftDotCon
            })}
          >
            ...
          </span>
        )}
        {paginations?.length > 0 ? (
          paginations.map((elem, key) => {
            const isCurrent = elem - 1 === page;
            const isAfter = elem - 2 === page;
            const isBefore = elem === page;
            const isLastPage = elem === lastPageNum && elem > limit;

            return (
              <a
                css={linkStyle({
                  current: isCurrent,
                  after: isAfter,
                  before: isBefore,
                  lastPage: isLastPage
                })}
                tabIndex={1}
                key={key}
                onClick={() => onChangePage && onChangePage(elem - 1)}
              >
                {elem}
              </a>
            );
          })
        ) : (
          <a
            css={linkStyle({
              current: true,
              lastPage: true
            })}
          >
            0
          </a>
        )}
        {dotMode && (
          <span
            css={dotdotdotStyle({
              active: rightDotCon
            })}
          >
            ...
          </span>
        )}
        {dotMode && rightDotCon && (
          <a
            css={linkStyle({
              current: false,
              after: false,
              before: false,
              lastPage: false
            })}
            tabIndex={1}
            onClick={() => onChangePage && onChangePage(lastPageNum - 1)}
          >
            {lastPageNum}
          </a>
        )}
      </div>
      <a
        css={linkStyle({
          shortcut: true,
          direction: 'right',
          disabled: dotMode && nextCon
        })}
        tabIndex={1}
        onClick={debounce(() => {
          getNextPage();
        }, 150)}
      >
        <ArrowIcon direction={'right'} />
      </a>
      {!dotMode && (
        <a
          css={linkStyle({
            shortcut: true,
            direction: 'right',
            disabled: false
          })}
          tabIndex={1}
          onClick={() => onChangePage && onChangePage(lastPageNum - 1)}
        >
          <DoubleArrowIcon direction={'right'} />
        </a>
      )}
    </Flex>
  );
};

export default Pagination;
