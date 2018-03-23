import styled from 'styled-components';
// import { media } from 'utils/styles/media';
// import { toRem } from 'utils/styles/general';
import { Layout } from 'antd';
const { Sider } = Layout;
export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;
export const StyledSiderBar = styled(Sider)`
  padding: 10px;
`;
