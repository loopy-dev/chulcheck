import type { Attendance } from '../../api/types';
import type { Day } from '../../factory/Calender';

interface Props {
  items: Attendance[];
  dateData: Day;
}

/**
 * ANCHOR
 * 더 좋은 방법이 있는지 생각해보기
 * 캐싱도 하면 좋을 듯?
 * */
const DataCell = ({ items, dateData }: Props) => (
  <div>
    {items.find((item) => {
      const date = new Date(item.timestamp);
      return (
        date.getFullYear() === dateData.year &&
        date.getMonth() === dateData.month &&
        date.getDate() === dateData.date
      );
    })
      ? '출석'
      : null}
  </div>
);

export default DataCell;
