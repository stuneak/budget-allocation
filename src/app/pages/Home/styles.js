import styled from 'styled-components';
// import { media } from 'utils/styles/media';
import { toRem } from 'utils/styles/general';

export const HomeLayout = styled.div`
  background: rgba(19, 35, 47, 0.9);
  min-height: 100vh;
  padding: 0px ${toRem(16)};
`;
