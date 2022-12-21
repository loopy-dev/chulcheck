import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLoading from '../../hooks/shared/useLoading';
import useOrganization from '../../hooks/useOrganization';
import DEFAULT_BREAKPOINTS from '../../themes/breakpoints';
import DEFAULT_SHADOWS from '../../themes/shadows';
import { formatDate } from '../../utils/dateFormat';
import { LoadingButton as Button } from '../shared/Button';
import { H2 } from '../shared/Headings';
import P from '../shared/Paragraph';
import Layout from './Layout';

const Template = () => {
  const { id } = useParams();
  const { organization, getOrganizationDetail, joinOrganization } =
    useOrganization();
  const [loading, startTransition] = useLoading();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await joinOrganization(Number(id));
    } catch (error) {
      console.error(error);
      window.alert('가입에 실패하였습니다.');
    }
  };

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
    <Layout>
      {organization && (
        <Container>
          {/** head */}
          <H2>Organization 정보</H2>

          {/** body */}
          <div>
            <P>이름: {organization.name}</P>
            <P>리더: {organization.leader.username}</P>
            <P>인원 수: {organization.members.length}명</P>
            <P>
              생성일:{' '}
              {formatDate(new Date(organization.createdAt), { delimiter: '-' })}
            </P>
          </div>

          {/** footer */}
          {/**
           * 아직 가입하지 않은 그룹이라면 가입하기 버튼을 보이고, 그렇지 않다면
           * 이미 가입되어 있음을 표시하며 disabled 처리한다.
           * 가입하기, 이미 가입되어 있습니다 간 버튼 크기를 동일하게 하기 위해 min-width를 적용한다.
           * TODO - 이미 가입했다면, 이미 가입되어 있습니다를 표시하기
           * 유저 정보 필요!
           */}
          <div>
            <Button
              fullWidth
              isLoading={loading}
              size="lg"
              variant="primary"
              onClick={handleClick}
            >
              가입하기
            </Button>
          </div>
        </Container>
      )}
    </Layout>
  );
};

export default Template;

const Container = styled.div`
  /** flex attributes */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  padding: 32px 48px;

  width: 100%;
  border-radius: 6px;
  box-shadow: ${DEFAULT_SHADOWS.dp2};

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.md}px) {
    padding: 32px 16px;
  }

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.sm}px) {
    padding: 16px 8px;
  }
`;
