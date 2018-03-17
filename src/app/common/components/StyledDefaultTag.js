import styled from 'styled-components';
import { toRem } from 'utils/styles/general';

export const StyledH3 = styled.h1`
  color: ${({ color }) => (color ? `${color}` : 'white')};
`;
export const StyledP = styled.p`
  color: ${({ color }) => (color ? `${color}` : 'white')};
  font-size: ${({ size }) => (size ? `${toRem(size)}` : `${toRem(16)}`)};
`;
