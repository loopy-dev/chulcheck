import { createContext, useContext } from 'react';
import useAttendance from '../hooks/useAttendance';
import type {
  GetAttendanceListHandler,
  AddAttendanceHandler,
} from '../hooks/useAttendance/useAttendance';
import type { AttendancePair } from '../hooks/useAttendance/useAttendance.helper';

const AttendanceStateContext = createContext({});
const AttendanceDispatchContext = createContext({});

export const useAttendanceStateContext = () =>
  useContext(AttendanceStateContext) as AttendancePair;

// TODO - 타입 정의 후 세트로 묶기
interface AttendanceDispatchProps {
  addAttendance: AddAttendanceHandler;
  getAttendanceList: GetAttendanceListHandler;
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
