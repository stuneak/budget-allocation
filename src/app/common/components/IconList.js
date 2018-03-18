import styled from 'styled-components';
import { toRem } from 'utils/styles/general';

export const IconList = styled.span`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: space-around;
  font-size: ${({ size }) => (size ? `${toRem(size)}` : `${toRem(16)}`)};
  & > i {
    margin-left: ${({ direction }) => direction === 'row' && `${toRem(5)}`};
  }
`;
