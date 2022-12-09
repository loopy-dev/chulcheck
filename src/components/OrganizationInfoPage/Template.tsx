import styled from 'styled-components';
import DEFAULT_BREAKPOINTS from '../../themes/breakpoints';
import DEFAULT_SHADOWS from '../../themes/shadows';
import { H2 } from '../shared/Headings';
import P from '../shared/Paragraph';
import Layout from './Layout';
import type { Organization } from '../../api/types';

interface Props {
  organization: Organization;
}

const Template = ({ organization }: Props) => {
  return (
    <Layout>
      <Container>
        {/** head */}
        <H2>Organization 정보</H2>

        {/** body */}
        <div>
          <P>이름: {organization.name}</P>
          <P>리더: {organization.leader.username}</P>
          <P>인원 수: {organization.members.length}명</P>
          <P>생성일: {organization.createdAt}</P>
        </div>
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
