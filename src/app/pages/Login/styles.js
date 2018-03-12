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
  padding: 30px;
`;
export const FormWrap = styled.div`
  background: rgba(19, 35, 47, 0.9);
`;
export const FormInput = styled.input`
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  padding: 0.8em 0.8em 10px 0.8em;
  border: none;
  outline: 0;
  display: inline-block;
  margin: 0 0 0.8em 0;
  ${({ type }) =>
    type === 'submit'
      ? 'cursor: pointer; color: white; background: #1fb5bf; border: 1px solid #1ba0a9;'
      : 'padding-right: 2em; '};
`;
export const Tabs = styled.div`
  display: flex;
`;

export const TabsLink = styled.a`
  padding: 15px 0px 15px;
  flex: 1;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  ${({ active }) =>
    active ? 'background: #1fb5bf; color: white;' : 'color: #1fb5bf;'};
`;
