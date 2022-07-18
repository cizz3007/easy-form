import { useMemo } from 'react';
import dynamic from 'next/dynamic';
const TableHead = dynamic(() => import('./TableHead'));
const TableBody = dynamic(() => import('./TableBody'));
const TableEmpty = dynamic(() => import('./TableEmpty'));
const Pagination = dynamic(() => import('@src/components/pagination/Pagination'));
import { tableLayoutStyle, tableStyle } from '@src/components/table/styles/tableStyle';
import TableComponentProps from '@src/components/table/types/table.type';

const Table = ({
  columns = [],
  data = [],
  total = 0,
  limit = 0,
  count = 3,
  page = 0,
  onChangePage = () => null,
  fetchData = () => null,
  onClickRow = () => null
}: TableComponentProps) => {
  const names = useMemo(
    () =>
      columns.map((elem, index) => {
        const columnName = elem.dataIndex;
        const title = elem.title;
        const render = elem.render;

        for (const innerElem of data) {
          for (const obj in innerElem) {
            if (obj === columnName)
              return {
                columnName,
                title,
                render,
                index
              };
          }
        }

        return {
          columnName: undefined,
          title: title,
          index: index,
          render: render
        };
      }),
    [columns, data]
  );

  const hasData = data.length > 0;

  return (
    <div css={tableLayoutStyle}>
      <table css={tableStyle}>
        <TableHead data={names} />
        {hasData ? (
          <TableBody data={data} name={names} onClickRow={onClickRow} />
        ) : (
          <TableEmpty colSpan={names.length} />
        )}
      </table>
      <Pagination
        total={total}
        page={page}
        limit={limit}
        count={count}
        fetchData={fetchData}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default Table;
