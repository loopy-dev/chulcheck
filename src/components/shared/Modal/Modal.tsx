import type { HTMLAttributes } from 'react';
import type { CSSProperties } from 'react';
import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement>, ContainerProps {}

const defaultStyles: CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
};

// 이벤트 등록하기, keyup, clickAway
const Modal = ({ isOpen, style, children, ...props }: Props) => {
  const portal = useMemo(() => {
    const div = document.createElement('div');
    div.className = 'modal-portal';
    return div;
  }, []);

  useEffect(() => {
    document.body.appendChild(portal);
    return () => {
      document.body.removeChild(portal);
    };
  }, [portal]);

  return ReactDOM.createPortal(
    <Container isOpen={isOpen} style={style ? style : defaultStyles} {...props}>
      <Inner>{children}</Inner>
    </Container>,
    portal
  );
};

export default Modal;

const displayStyle = css<ContainerProps>`
  ${({ isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
  `}
`;

const Container = styled.div<Props>`
  ${displayStyle};
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
