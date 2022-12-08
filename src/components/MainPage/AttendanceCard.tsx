import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAttendanceDispatchContext } from '../../contexts/AttendanceProvider';
import useLoading from '../../hooks/shared/useLoading';
import useOrganization from '../../hooks/useOrganization';
import useTimer from '../../hooks/useTimer';
import DEFAULT_SHADOWS from '../../themes/shadows';
import { formatDate, formatTime } from '../../utils/dateFormat';
import { LoadingButton } from '../shared/Button';
import Dropdown from '../shared/Dropdown';
import Select from '../shared/Select';
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

  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const postAttendance = async (organizationId: number) => {
    try {
      await startTransition(addAttendance(organizationId));

      // initialize
      setSelectedItemIndex(-1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    if (selectedItemIndex < 0) {
      window.alert('그룹을 선택해 주세요.');
      return;
    }
    postAttendance(organizations[selectedItemIndex].id);
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
            <Select
              title={
                selectedItemIndex === -1
                  ? '출석할 그룹 선택하기...'
                  : items[selectedItemIndex].value
              }
            />
          }
          onClickItem={(index) => setSelectedItemIndex(index)}
        />
        <Wrapper>
          <LoadingButton
            fullWidth
            isLoading={loading}
            size="lg"
            variant="primary"
            onClick={handleClick}
          >
            현재 시간으로 출석 체크하기
          </LoadingButton>
        </Wrapper>
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
