import styled from 'styled-components';
import DEFAULT_BREAKPOINTS from '../../themes/breakpoints';
import DEFAULT_SHADOWS from '../../themes/shadows';
import { H2 } from '../shared/Headings';
import Layout from './Layout';
import type { Organization } from '../../api/types';

interface Props {
  organization: Organization;
}

const Template = ({ organization }: Props) => {
  return (
    <Layout>
      <Container>
        <H2>Organization 정보</H2>
        <div>이름: {organization.name}</div>
        <div>리더: {organization.leader.username}</div>
        <div>인원 수: {organization.members.length}명</div>
        <div>생성일: {organization.createdAt}</div>
      </Container>
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
