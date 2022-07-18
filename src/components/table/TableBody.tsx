import { forwardRef, useMemo } from 'react';
import { tableBodyStyle, tdStyle, trStyle } from 'src/components/table/styles/tableStyle';
import { LegacyRef } from 'react';
import { TableData, TableName } from '@src/components/table/types/table.type';

interface TableBodyComponentProps {
  data: TableData[];
  name: TableName[];
  onClickRow: (args: any) => void;
}

type TableTdData = {
  value: string;
  index: number;
  render: () => any;
};

type ReducedData = {
  [key: string]: any;
};
const TableBody = forwardRef(
  (
    { data = [], name = [], onClickRow }: TableBodyComponentProps,
    ref: LegacyRef<HTMLTableSectionElement>
  ) => {
    const rendered = useMemo(() => {
      return data.map((elem, index) => {
        const reducedData: ReducedData = name.reduce(
          (acc: { [x: string]: string | number }, curr: { [x: string]: string | number }) => (
            (acc[curr['columnName']] = elem[curr['columnName']] || 'NO DATA'), acc
          ),
          {} as ReducedData
        );

        let tds: TableTdData[] = [];

        for (const value in reducedData) {
          name.forEach((item) => {
            if (item.columnName === value) {
              tds.push({
                value: reducedData[value],
                index: item.index,
                render: () => (item.render ? item.render(data[index]) : null)
              });
            }
          });
        }

        tds = tds.sort((a, b) => {
          if (a.index > b.index) {
            return 1;
          }
          if (a.index < b.index) {
            return -1;
          }
          return 0;
        });

        return (
          <tr
            key={index}
            onClick={onClickRow ? () => onClickRow(data[index]) : undefined}
            css={trStyle(!!onClickRow)}
          >
            {tds.map((item, i) => {
              if (item?.render && typeof item.render === 'function') {
                const rendered = item.render();
                if (rendered) {
                  return (
                    <td key={i} css={tdStyle}>
                      {rendered}
                    </td>
                  );
                }
              }
              return (
                <td css={tdStyle} key={i} className={item.value === 'NO DATA' ? 'no-data' : undefined}>
                  {item.value}
                </td>
              );
            })}
          </tr>
        );
      });
    }, [data, name, onClickRow]);

    return (
      <tbody css={tableBodyStyle} ref={ref}>
        {rendered}
      </tbody>
    );
  }
);

export default TableBody;
