import { PaginationType } from '@src/components/pagination/type/pagination.type';

export type TableData = { id: string | number; key: string | number; [propName: string]: string | number };

export type TableColumn = {
  title: string;
  dataIndex: string;
  [key: string]: string;
};
export type TableName = {
  columnName?: string;
  index: number;
  render?: any;
  title: string;
};
export default interface TableComponentProps extends PaginationType {
  columns: TableColumn[];
  data: TableData[];
  onClickRow?(args: any): any;
}
