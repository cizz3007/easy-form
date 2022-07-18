import BaseTable from './Table';
import { ForwardRefExoticComponent } from 'react';
import TableComponentProps from '@src/components/table/types/table.type';

interface CompoundedTableComponent extends ForwardRefExoticComponent<TableComponentProps> {
  Default: typeof BaseTable;
}

const Table = BaseTable as CompoundedTableComponent;

export default Table;
