import { Calender } from '../components/Calender';
import AttendanceCard from '../components/MainPage';
import MainPageLayout from '../components/layouts/MainPageLayout';
import AttendanceProvider from '../contexts/AttendanceProvider';

const MainPage = () => {
  return (
    <AttendanceProvider>
      <MainPageLayout left={<Calender />} right={<AttendanceCard />} />
    </AttendanceProvider>
  );
};

export default MainPage;
