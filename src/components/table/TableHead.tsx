import { forwardRef, LegacyRef, useMemo } from 'react';
import { tableHeadStyle, thStyle, trStyle } from 'src/components/table/styles/tableStyle';

type TableHeadData = {
  title?: string;
};

interface TableHeadComponentProps {
  data: TableHeadData[];
  isHoverMode?: boolean;
}

const TableHead = forwardRef(
  ({ data = [], isHoverMode = false }: TableHeadComponentProps, ref: LegacyRef<HTMLTableSectionElement>) => {
    const tableHeads = useMemo(() => {
      return data.map((elem = {}, index) => (
        <th css={thStyle} key={'table_head_' + elem.title + index}>
          {elem.title}
        </th>
      ));
    }, [data]);

    return (
      <thead css={tableHeadStyle} ref={ref}>
        <tr css={trStyle(isHoverMode)}>{tableHeads}</tr>
      </thead>
    );
  }
);

export default TableHead;
