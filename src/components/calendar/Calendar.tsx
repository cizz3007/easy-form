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
import { getDaysLang } from '@src/components/calendar/utils/getDaysLang';

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
    const [dates, setDates] = useState<number[]>([]);
    const [prevDates, setPrevDates] = useState<number[]>([]);
    const [nextDates, setNextDates] = useState<number[]>([]);

    useEffect(() => {
      const prevLastDate: number = new Date(year, month - 1, 0).getDate();
      const currentLastDate: number = new Date(year, month, 0).getDate();
      const day: number = new Date(year, month - 1, 1).getDay();
      const currentLastDay: number = new Date(year, month - 1, currentLastDate).getDay();
      const dateArr: number[] = [];
      const prevDateArr: number[] = [];
      const nextDateArr: number[] = [];

      for (let i = 1; i <= currentLastDate; i++) {
        dateArr.push(i);
      }
      for (let i = prevLastDate; i > prevLastDate - day; i--) {
        prevDateArr.push(i);
      }
      for (let i = 1; i < 7 - currentLastDay + 7; i++) {
        const total = dateArr.length + prevDateArr.length + i;
        if (total > 42) {
          break;
        }
        nextDateArr.push(i);
      }
      setDates(dateArr);
      setPrevDates(prevDateArr);
      setNextDates(nextDateArr);
    }, [month, year]);

    const sortDates = useCallback((selected: string[]) => {
      return selected.sort((a, b) => (new Date(a).getTime() < new Date(b).getTime() ? -1 : 1));
    }, []);

    const getDateObject = useCallback((dateValue: string) => {
      return new Date(dateValue);
    }, []);
    // 달력 날짜들
    const calendars = useMemo(() => {
      return [...prevDates, ...dates, ...nextDates].map((day: number) => {
        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;
        const dateValue = year + '-' + formattedMonth + '-' + formattedDay;
        const isSelected = selected.some((searchElement) => searchElement === dateValue);
        const currentIndex = selected.findIndex((value) => value === dateValue);
        const isOdd = currentIndex % 2 == 0;
        console.log(getDaysLang(getDateObject(dateValue).getDay()));
        let className = 'default';
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
            onClick={onClickHandler}
          >
            <div className={'contents-area'}>{day}</div>
          </button>
        );
      });
    }, [dates, month, onSelect, selected, sortDates, year]);

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
