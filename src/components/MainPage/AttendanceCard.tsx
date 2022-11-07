import styled from 'styled-components';
import { useAttendanceDispatchContext } from '../../contexts/AttendanceProvider';
import useLoading from '../../hooks/shared/useLoading';
import DEFAULT_SHADOWS from '../../themes/shadows';
import { LoadingButton } from '../shared/Button';

const AttendanceCard = () => {
  const [loading, startTransition] = useLoading();
  const { addAttendance } = useAttendanceDispatchContext();

  // TODO - success 시 버튼에 표시하기
  // const message = useState('') and setTimeout으로 상태 변경하기
  const handleClick = async () => {
    try {
      await startTransition(addAttendance());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      AttendanceCard
      <Wrapper>
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
