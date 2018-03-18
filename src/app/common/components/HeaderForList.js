import styled from 'styled-components';
import { toRem } from 'utils/styles/general';

export const HeaderForList = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${toRem(14)} ${toRem(20)};
  font-size: ${toRem(20)};
  background-color: #00152a;
  color: #1890ff;
  margin: 0px;
`;
