import { forwardRef, useEffect, useState, useMemo, ForwardedRef, useCallback } from 'react';
import {
  calendarButtonStyle,
  calendarContainerStyle,
  calendarLayoutStyle,
  calendarTitleStyle,
  dayBoxStyle,
  dayButtonStyle,
  extraButtonContainerStyle,
  extraButtonStyle,
  innerLayout
} from './styles/calendarStyle';
import { CalendarComponentProps, CalendarPayload } from './types/calendar.type';
import Flex from '@components/Flex';
import Icon from '@components/icons/Icon';

const Calendar = forwardRef(
  (
    {
      month = 8,
      year = 2021,
      onChange = (yyyymmdd?: string[]): string[] => {
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

    useEffect(() => {
      const lastDay: number = new Date(year, month, 0).getDate();
      const days: number[] = [];
      for (let i = 1; i <= lastDay; i++) {
        days.push(i);
      }
      setDates(days);
    }, [month, year]);

    const sortDates = useCallback((selected: CalendarPayload[]) => {
      return selected.sort((a, b) => (new Date(a.value).getTime() < new Date(b.value).getTime() ? -1 : 1));
    }, []);
    // 달력 날짜들
    const calendars = useMemo(() => {
      return dates.map((day: number) => {
        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;
        // 선택된 날짜 포맷 ex) 2022-09-09
        const dateValue = year + '-' + formattedMonth + '-' + formattedDay;
        const isSelected = selected.some((searchElement) => searchElement.value === dateValue);
        // endIndex는 선택되지 않은 값일때 currentInddex 가 -1이라 에러가 나는 것
        // [2021-09-01, 2021-09-03, 2021-09-05, 2021-09-11, 2021-09-20]
        const currentDate = new Date(dateValue).getTime();

        const start = selected.findLast(
          (payload: CalendarPayload) => new Date(payload.value).getTime() < currentDate
        );
        const last = selected.find(
          (payload: CalendarPayload) => new Date(payload.value).getTime() > currentDate
        );

        let startDate = new Date(start?.value).getTime();
        let endDate = new Date(last?.value).getTime();

        let className = 'default';

        const isOdd = selected.findIndex((value) => value.value === dateValue) % 2 == 0;

        if (isSelected) {
          className += ' selected';

          if (isOdd) {
            className += ' start';
            startDate = new Date(dateValue).getTime();
          } else if (!isOdd) {
            className += ' end';
            endDate = new Date(dateValue).getTime();
          }
        }
        if (currentDate > startDate && currentDate < endDate) {
          className += ' transit';
        }

        const onClickHandler = () => {
          if (isSelected) {
            onChange(sortDates(selected.filter((arrDay) => arrDay.value !== dateValue)));
          } else {
            // 배열에 추가
            onChange(sortDates([...selected.concat(dateValue)]));
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
    }, [dates, month, onChange, selected, sortDates, year]);

    return (
      <div css={calendarLayoutStyle} ref={ref}>
        <div css={innerLayout}>
          <Flex>
            {visibleNavigator && (
              <button onClick={undefined} css={calendarButtonStyle}>
                <Icon type={'ArrowLeft'} size={'medium'} />
              </button>
            )}
            <h4 css={calendarTitleStyle}>
              {year}년 {month}월
            </h4>
            {visibleNavigator && (
              <button onClick={undefined} css={calendarButtonStyle}>
                <Icon type={'ArrowRight'} size={'medium'} />
              </button>
            )}
          </Flex>
          <div css={calendarContainerStyle}>
            <Flex justify={'center'}>
              <div className={'tiles'}>일</div>
              <div className={'tiles'}>월</div>
              <div className={'tiles'}>화</div>
              <div className={'tiles'}>수</div>
              <div className={'tiles'}>목</div>
              <div className={'tiles'}>금</div>
              <div className={'tiles'}>토</div>
            </Flex>
            {/* 날짜*/}
            <Flex css={dayBoxStyle} justify={'left'}>
              {calendars}
            </Flex>
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
