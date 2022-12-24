import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const Overlay = styled.div`
  position: fixed;
  top: ${theme.sizes[0]};
  left: ${theme.sizes[0]};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary};
  z-index: 1200;
`;

export const ModalWrapper = styled.div`
  max-width: calc(100vw - ${theme.sizes[8]});
  max-height: calc(100vh - ${theme.sizes[7]});
`;
