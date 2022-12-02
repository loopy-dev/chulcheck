import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createOrganization } from '../api/organization';
import AuthFormTemplate from '../components/AuthFormTemplate';
import AuthFormLayout from '../components/layouts/AuthFormLayout';
import Button from '../components/shared/Button/LoadingButton';
import Input from '../components/shared/Input';
import useForm from '../hooks/shared/useForm';
import useLoading from '../hooks/shared/useLoading';
import DEFAULT_COLORS from '../themes/colors';

const GroupCreatePage = () => {
  const navigate = useNavigate();
  const [isLoading, startTransition] = useLoading();
  const { data, handleChange, handleSubmit, handleBlur, touched, errors } =
    useForm({
      initialState: {
        groupName: '',
      },
      onSubmit: async (e) => {
        e.preventDefault();
        // api 호출
        try {
          await startTransition(createOrganization(data.groupName));

          // main page 이동
          navigate('/');
        } catch (error) {
          console.error(error);
          window.alert(error);
        }
        // main page 이동
      },
      validate: (data) => {
        const errors = Object.keys(data).reduce(
          (acc, cur) => ({ ...acc, [cur]: '' }),
          {} as Partial<typeof data>
        );

        if (!data.groupName.trim()) {
          errors.groupName =
            '그룹 이름은 적어도 공백을 제외한 1글자 이상이어야 합니다.';
        }

        return errors;
      },
    });

  // TODO - 임시 템플릿 교체하기
  // NOTE - 해당 템플릿은 임시 템플릿 입니다.
  return (
    <AuthFormLayout>
      {/* TODO - 일단 footer에 에러 넣고 추후 고도화 */}
      <AuthFormTemplate
        title="그룹 만들기"
        controls={
          <Input
            disabled={isLoading}
            label="그룹 이름"
            name="groupName"
            placeholder="그룹 이름"
            value={data.groupName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        }
        footer={
          <ErrorMessage>
            {touched.groupName && errors.groupName ? errors.groupName : ''}
          </ErrorMessage>
        }
        trigger={
          <Button
            fullWidth
            isLoading={isLoading}
            size="lg"
            type="submit"
            variant="primary"
          >
            그룹 만들기
          </Button>
        }
        onSubmit={handleSubmit}
      />
    </AuthFormLayout>
  );
};

export default GroupCreatePage;

const ErrorMessage = styled.div`
  color: ${DEFAULT_COLORS.ERROR_400};
`;
