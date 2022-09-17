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
  selected: string[];
  onSelect: any;
  visibleNavigator?: boolean;
  selectAllDateOfMonth?: any;
  setSelectedDays: any;
  contents: any;
}
