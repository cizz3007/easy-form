export type CalendarPayload = {
  value: string;
  isStart: boolean;
  isEnd: boolean;
  isTransit: boolean;
  isSelected: boolean;
};

export interface CalendarComponentProps {
  month: number;
  year: number;
  selected: string[] | CalendarPayload[];
  onChange: any;
  visibleNavigator?: boolean;
  selectAllDateOfMonth?: any;
  setSelectedDays: any;
  contents: any;
}
