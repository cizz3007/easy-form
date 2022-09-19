import { forwardRef, useEffect, useState, useMemo, ForwardedRef, useCallback } from 'react';
import {
  calendarContainerStyle,
  calendarLayoutStyle,
  dayButtonStyle,
  extraButtonContainerStyle,
  extraButtonStyle,
  innerLayout
} from './styles/calendarStyle';
import { CalendarComponentProps } from './types/calendar.type';
import { formatDate, FormattedDateType } from '@src/components/calendar/utils/formatDate';

const Calendar = forwardRef(
  (
    {
      month = 8,
      year = 2021,
      onSelect = (yyyymmdd?: string[]): string[] => {
        return yyyymmdd ?? [];
      },
      visibleNavigator = true,
      selectAllDateOfMonth,
      selected = []
    }: CalendarComponentProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    //현재 년월에 맞는 생성된 날짜 데이터 배열
    const [dates, setDates] = useState<FormattedDateType[]>([]);
    const [prevDates, setPrevDates] = useState<FormattedDateType[]>([]);
    const [nextDates, setNextDates] = useState<FormattedDateType[]>([]);

    useEffect(() => {
      const prevLastDate: number = new Date(year, month - 1, 0).getDate();
      const currentLastDate: number = new Date(year, month, 0).getDate();
      // 시작하는 이번 달의 요일
      const day: number = new Date(year, month - 1, 1).getDay();
      const currentLastDay: number = new Date(year, month - 1, currentLastDate).getDay();
      const dateArr: FormattedDateType[] = [];
      const prevDateArr: FormattedDateType[] = [];
      const nextDateArr: FormattedDateType[] = [];

      for (let i = 1; i <= currentLastDate; i++) {
        dateArr.push(formatDate(year, month, i, 'current', false));
      }
      for (let i = prevLastDate - day + 1; i < prevLastDate + 1; i++) {
        prevDateArr.push(formatDate(year, month - 1, i, 'prev', true));
      }
      for (let i = 1; i < 7 - currentLastDay + 7; i++) {
        const total = dateArr.length + prevDateArr.length + i;
        if (total > 42) {
          break;
        }
        nextDateArr.push(formatDate(year, month + 1, i, 'next', true));
      }
      setDates(dateArr);
      setPrevDates(prevDateArr);
      setNextDates(nextDateArr);
    }, [month, year]);

    const sortDates = useCallback((selected: string[]) => {
      return selected.sort((a, b) => (new Date(a).getTime() < new Date(b).getTime() ? -1 : 1));
    }, []);

    // 달력 날짜들
    const calendars = useMemo(() => {
      return [...prevDates, ...dates, ...nextDates].map((day: FormattedDateType) => {
        const dateValue = day.value;
        const disabled = day.disabled;
        const isSelected = selected.some((searchElement) => searchElement === dateValue);
        const currentIndex = selected.findIndex((value) => value === dateValue);
        const isOdd = currentIndex % 2 == 0;

        const isCurrentMonth = day.type === 'current';
        let className = 'default';

        if (isCurrentMonth) {
          className += ' current';
        }

        if (isSelected) {
          className += ' selected';
          if (isOdd) {
            className += ' start';
            if (!selected[currentIndex + 1]) {
              className += ' single';
            }
          } else if (!isOdd) {
            className += ' end';
            if (!selected[currentIndex - 1]) {
              className += ' single';
            }
          }
        }

        let breaks = false;
        const isTransit = (selected as string[]).reduce((prev, current, index) => {
          //start보단 크고 end보단 작아야 transit을 줘야한다.ㄴ
          if (breaks) {
            return prev;
          }
          const isStart = (index + 1) % 2 !== 0;

          if (prev === 'start' && !isStart && new Date(current).getTime() > new Date(dateValue).getTime()) {
            breaks = true;
            return 'transit';
          }
          if (isStart) {
            return new Date(current).getTime() < new Date(dateValue).getTime() ? 'start' : '';
          } else {
            return new Date(current).getTime() > new Date(dateValue).getTime() ? 'end' : '';
          }
        }, '');

        if (isTransit === 'transit') {
          className += ' transit';
        }

        const onClickHandler = () => {
          if (isSelected) {
            onSelect(sortDates(selected.filter((arrDay) => arrDay !== dateValue)));
          } else {
            // 배열에 추가
            onSelect(sortDates(selected.concat(dateValue)));
          }
        };

        return (
          <button
            css={dayButtonStyle}
            key={dateValue}
            type={'button'}
            tabIndex={0}
            className={className}
            onClick={disabled ? undefined : onClickHandler}
          >
            <div className={'contents-area'}>{day.date}</div>
          </button>
        );
      });
    }, [dates, month, onSelect, selected, sortDates, year, nextDates]);

    return (
      <div css={calendarLayoutStyle} ref={ref}>
        <div css={innerLayout}>
          {/*<Flex>*/}
          {/*  {visibleNavigator && (*/}
          {/*    <button onClick={undefined} css={calendarButtonStyle}>*/}
          {/*      /!*<Icon type={'ArrowLeft'} size={'medium'} />*!/*/}
          {/*    </button>*/}
          {/*  )}*/}
          {/*  <h4 css={calendarTitleStyle}>*/}
          {/*    {year}년 {month}월*/}
          {/*  </h4>*/}
          {/*  {visibleNavigator && (*/}
          {/*    <button onClick={undefined} css={calendarButtonStyle}>*/}
          {/*      /!*<Icon type={'ArrowRight'} size={'medium'} />*!/*/}
          {/*    </button>*/}
          {/*  )}*/}
          {/*</Flex>*/}
          <div css={calendarContainerStyle}>
            {/*<Flex justify={'center'}>*/}
            {/*  <div className={'tiles'}>일</div>*/}
            {/*  <div className={'tiles'}>월</div>*/}
            {/*  <div className={'tiles'}>화</div>*/}
            {/*  <div className={'tiles'}>수</div>*/}
            {/*  <div className={'tiles'}>목</div>*/}
            {/*  <div className={'tiles'}>금</div>*/}
            {/*  <div className={'tiles'}>토</div>*/}
            {/*</Flex>*/}
            {/* 날짜*/}
            {calendars}
          </div>
          {visibleNavigator && (
            <div css={extraButtonContainerStyle}>
              <button
                css={extraButtonStyle}
                onClick={() => {
                  selectAllDateOfMonth(year, month);
                }}
              >
                선택된 달 전체 선택
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Calendar;
