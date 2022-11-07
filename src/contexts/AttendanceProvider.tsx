import { createContext, useContext } from 'react';
import useAttendance from '../hooks/useAttendance';
import { AttendancePair } from '../hooks/useAttendance/useAttendance.helper';

const AttendanceStateContext = createContext({});
const AttendanceDispatchContext = createContext({});

export const useAttendanceStateContext = () =>
  useContext(AttendanceStateContext) as AttendancePair;

interface AttendanceDispatchProps {
  addAttendance: () => Promise<void>;
  getMonthlyAttendance: (month: number) => Promise<void>;
}

export const useAttendanceDispatchContext = () =>
  useContext(AttendanceDispatchContext) as AttendanceDispatchProps;

interface Props {
  children: React.ReactNode;
}

const AttendanceProvider = ({ children }: Props) => {
  const { attendance, addAttendance, getMonthlyAttendance } = useAttendance();
  return (
    <AttendanceStateContext.Provider value={attendance}>
      <AttendanceDispatchContext.Provider
        value={{ addAttendance, getMonthlyAttendance }}
      >
        {children}
      </AttendanceDispatchContext.Provider>
    </AttendanceStateContext.Provider>
  );
};

export default AttendanceProvider;
