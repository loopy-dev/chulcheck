import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Template from '../components/OrganizationInfoPage';
import GlobalLayout from '../components/layouts/GlobalLayout';
import useLoading from '../hooks/shared/useLoading';
import useOrganization from '../hooks/useOrganization';

const OrganizationInfoPage = () => {
  const { id } = useParams();
  const { organization, getOrganizationDetail } = useOrganization();
  const [loading, startTransition] = useLoading();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // fetch organization detail
      try {
        await startTransition(getOrganizationDetail(Number(id)));
      } catch {
        navigate('/404', { replace: true });
      }
    };

    fetchData();
  }, [getOrganizationDetail, id, navigate, startTransition]);

  return (
    <>
      <Header />
      <GlobalLayout>
        {organization && <Template organization={organization} />}
      </GlobalLayout>
    </>
  );
};

export default OrganizationInfoPage;
