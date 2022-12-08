import { createContext, useContext } from 'react';
import useAttendance from '../hooks/useAttendance';
import type { AttendanceResponseQuery } from '../api/types';
import type { AttendancePair } from '../hooks/useAttendance/useAttendance.helper';

const AttendanceStateContext = createContext({});
const AttendanceDispatchContext = createContext({});

export const useAttendanceStateContext = () =>
  useContext(AttendanceStateContext) as AttendancePair;

interface AttendanceDispatchProps {
  addAttendance: () => Promise<void>;
  getAttendanceList: (query?: AttendanceResponseQuery) => Promise<void>;
}

export const useAttendanceDispatchContext = () =>
  useContext(AttendanceDispatchContext) as AttendanceDispatchProps;

interface Props {
  children: React.ReactNode;
}

const AttendanceProvider = ({ children }: Props) => {
  const { attendance, addAttendance, getAttendanceList } = useAttendance();
  return (
    <AttendanceStateContext.Provider value={attendance}>
      <AttendanceDispatchContext.Provider
        value={{ addAttendance, getAttendanceList }}
      >
        {children}
      </AttendanceDispatchContext.Provider>
    </AttendanceStateContext.Provider>
  );
};

export default AttendanceProvider;
