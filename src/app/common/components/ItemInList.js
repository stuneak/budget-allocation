import styled from 'styled-components';
import { toRem } from 'utils/styles/general';

export const ItemInList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${toRem(14)} ${toRem(20)};
  width: 100%;
  border-bottom: 1px solid #00152a;
  border-right: 1px solid #00152a;
  & > p {
    margin-bottom: ${toRem(3)};
  }
`;
