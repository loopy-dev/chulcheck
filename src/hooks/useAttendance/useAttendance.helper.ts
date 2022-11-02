import type { Attendance, AttendanceResponse } from '../../api/types';

export type AttendancePair = {
  [datetime: string]: Attendance[];
};

export function formatDate(dateArr: number[]) {
  return dateArr.map((el) => String(el)).join('-');
}

function formatAttendance(data: AttendanceResponse) {
  return {
    ...data,
    user: data.user.username,
  };
}

function formatAttendanceData(data: AttendanceResponse[]) {
  return data.reduce((acc, cur) => {
    const date = new Date(cur.timestamp);

    const dateString = formatDate([
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ]);

    const ret = { ...acc };

    if (!ret[dateString]) {
      ret[dateString] = [];
    }

    ret[dateString].push(formatAttendance(cur));

    return ret;
  }, {} as AttendancePair);
}

export default formatAttendanceData;
