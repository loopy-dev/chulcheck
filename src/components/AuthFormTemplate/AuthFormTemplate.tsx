import type { FormHTMLAttributes } from 'react';
import styled from 'styled-components';
import DEFAULT_BREAKPOINTS from '../../themes/breakpoints';
import DEFAULT_HEADING_STYLES from '../../themes/headings';
import DEFAULT_SHADOWS from '../../themes/shadows';
import { H1 } from '../shared/Headings';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  /** form의 제목을 전달받는 prop */
  title?: string;

  /** form의 Input Controls를 전달받는 prop */
  controls?: React.ReactNode;

  /** form event를 발생시킬 type="submit" 버튼을 전달받는 prop */
  trigger?: React.ReactNode;

  /** form 하위 추가 정보를 전달받는 prop */
  footer?: React.ReactNode;
}

/**
 * TODO: Error 처리 위치 넣어야 함
 */
const AuthFormTemplate = ({
  title,
  controls,
  trigger,
  footer,
  ...props
}: Props) => (
  <Form {...props}>
    <Title>
      <H1>{title}</H1>
    </Title>
    <Controller>{controls}</Controller>
    <Trigger>{trigger}</Trigger>
    {footer && <Footer>{footer}</Footer>}
  </Form>
);

const Form = styled.form`
  /** flex attributes */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const Title = styled.div`
  margin: 36px 0;
  text-align: center;

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.md}px) {
    * {
      font-size: ${DEFAULT_HEADING_STYLES.h4.fontSize}px;
      line-height: ${DEFAULT_HEADING_STYLES.h4.lineHeight}px;
    }
  }
`;

const Controller = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  margin: 16px 0;
`;

const Trigger = styled.div`
  width: 100%;
  margin: 32px 0;
`;

const Footer = styled.div`
  width: 100%;
  margin: 16px 0;

  font-size: 14px;
  line-height: 1.2;
  text-align: center;
`;

export default AuthFormTemplate;
