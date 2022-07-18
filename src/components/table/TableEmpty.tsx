const TableEmpty = ({ colSpan = 13 }: { colSpan: number }) => {
  return (
    <tbody>
      <tr>
        <td colSpan={colSpan}>
          <div className={'image'} />
          <p>Empty Data</p>
        </td>
      </tr>
    </tbody>
  );
};

export default TableEmpty;
