import styled from 'styled-components';

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(19, 35, 47, 0.9);
`;
export const Form = styled.form`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  padding: 40px 30px;
  width: 300px;
`;
export const FormWrap = styled.div`
  background: rgba(19, 35, 47, 0.9);
`;
export const Tabs = styled.div`
  display: flex;
`;
