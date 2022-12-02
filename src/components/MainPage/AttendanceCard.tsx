import { useEffect } from 'react';
import styled from 'styled-components';
import { useAttendanceDispatchContext } from '../../contexts/AttendanceProvider';
import useLoading from '../../hooks/shared/useLoading';
import useOrganization from '../../hooks/useOrganization';
import useTimer from '../../hooks/useTimer';
import DEFAULT_SHADOWS from '../../themes/shadows';
import { formatDate, formatTime } from '../../utils/dateFormat';
import { Button, LoadingButton } from '../shared/Button';
import Dropdown from '../shared/Dropdown';
import type { Item } from '../shared/Dropdown';

const AttendanceCard = () => {
  const [loading, startTransition] = useLoading();
  const { addAttendance } = useAttendanceDispatchContext();
  const timer = useTimer();

  const { organizations, getJoinedOrganizations } = useOrganization();

  const items = organizations.map<Item>((organization) => ({
    key: organization.id,
    value: organization.name,
  }));

  // TODO - success 시 버튼에 표시하기
  // const message = useState('') and setTimeout으로 상태 변경하기
  const handleClick = async () => {
    try {
      await startTransition(addAttendance());
    } catch (error) {
      console.error(error);
    }
  };

  // NOTE - useEffect로 컴포넌트 불러올 때 가입한 그룹 정보 불러오기
  useEffect(() => {
    (async () => {
      await getJoinedOrganizations();
    })();
  }, [getJoinedOrganizations]);

  return (
    <Container>
      {formatDate(new Date(timer), { delimiter: '-' })}{' '}
      {formatTime(new Date(timer), { delimiter: ':' })}
      <Wrapper>
        {/* Dropdown goes here */}
        <Dropdown
          items={items}
          trigger={
            <Button
              onClick={() => {
                console.log('click');
              }}
            >
              Test
            </Button>
          }
        />

        <LoadingButton
          fullWidth
          isLoading={loading}
          size="md"
          variant="primary"
          onClick={handleClick}
        >
          현재 시간으로 출석 체크하기
        </LoadingButton>
      </Wrapper>
    </Container>
  );
};

export default AttendanceCard;

const Container = styled.div`
  padding: 16px;
  border-radius: 6px;
  box-shadow: ${DEFAULT_SHADOWS.dp2};
`;

const Wrapper = styled.div`
  margin-top: 16px;
`;
