import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { defaultRem } from './general';

injectGlobal`
${styledNormalize}
  html {
    height: 100%;
    width: 100%;
    font-size: ${defaultRem}px;
  }
  body {
    width: 100%;
    height: 100%;
  }
`;
