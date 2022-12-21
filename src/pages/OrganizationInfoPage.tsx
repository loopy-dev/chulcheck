import Header from '../components/Header';
import Template from '../components/OrganizationInfoPage';
import GlobalLayout from '../components/layouts/GlobalLayout';

const OrganizationInfoPage = () => {
  return (
    <>
      <Header />
      <GlobalLayout>
        <Template />
      </GlobalLayout>
    </>
  );
};

export default OrganizationInfoPage;
