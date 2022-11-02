import { formatDate } from '../../hooks/useAttendance/useAttendance.helper';
import type { Day } from '../../factory/Calender';
import type { AttendancePair } from '../../hooks/useAttendance/useAttendance.helper';

interface Props {
  items: AttendancePair;
  dateData: Day;
}

/**
 * ANCHOR
 * 더 좋은 방법이 있는지 생각해보기
 * 캐싱도 하면 좋을 듯?
 * */
const DataCell = ({ items, dateData }: Props) => {
  const date = formatDate([dateData.year, dateData.month + 1, dateData.date]);
  const item = items[date] || [];
  return <div>{item.length ? '출석' : null}</div>;
};

export default DataCell;
