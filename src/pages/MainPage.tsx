import { Calender } from '../components/Calender';
import Header from '../components/Header';
import AttendanceCard from '../components/MainPage';
import GlobalLayout from '../components/layouts/GlobalLayout';
import MainPageLayout from '../components/layouts/MainPageLayout';
import AttendanceProvider from '../contexts/AttendanceProvider';

const MainPage = () => {
  return (
    <AttendanceProvider>
      <Header />
      <GlobalLayout>
        <MainPageLayout left={<Calender />} right={<AttendanceCard />} />
      </GlobalLayout>
    </AttendanceProvider>
  );
};

export default MainPage;
