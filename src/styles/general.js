import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
export const rem = 16;
export const toRem = px => `${px / rem}rem`;
injectGlobal`
${styledNormalize}
  html {
    height: 100%;
    width: 100%;
    font-size: ${rem}px;
  }
  body {
    width: 100%;
    height: 100%;
  }
`;
