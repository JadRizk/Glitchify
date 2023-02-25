import { RemNumber } from '../utils/RemValue';

export type Spacings = {
  spacing00: RemNumber;
  spacing01: RemNumber;
  spacing02: RemNumber;
  spacing03: RemNumber;
  spacing04: RemNumber;
  spacing05: RemNumber;
  spacing06: RemNumber;
  spacing07: RemNumber;
  spacing08: RemNumber;
  spacing09: RemNumber;
  spacing10: RemNumber;
  containerPadding: RemNumber;
  containerPaddingMd: RemNumber;
};

export const spacings: Spacings = {
  spacing00: '0rem',
  spacing01: '0.4rem',
  spacing02: '0.8rem',
  spacing03: '1.2rem',
  spacing04: '1.6rem',
  spacing05: '2rem',
  spacing06: '2.4rem',
  spacing07: '2.8rem',
  spacing08: '3.2rem',
  spacing09: '3.6rem',
  spacing10: '4rem',
  containerPadding: '2rem',
  containerPaddingMd: '4rem',
};
