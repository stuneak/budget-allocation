import { css } from 'styled-components';
import { defaultRem } from './general';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  const remSize = sizes[label] / defaultRem;
  acc[label] = (...args) => css`
    @media (max-width: ${remSize}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
