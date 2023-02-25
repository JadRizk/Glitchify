import { renderResponsiveStyles } from './renderResponsiveStyles';
import { css } from 'styled-components';
import { media } from './mediaQueryUtils';

describe('Render Responsive Styles', () => {
  const prop = 'width';
  const defaultData = '100px';
  const xsData = '150px';
  const lgData = '250px';
  it('Return default data only', () => {
    const expectedResult = [
      css`
        ${prop}:${defaultData}
      `,
    ];
    expect(renderResponsiveStyles({ default: defaultData }, prop)).toEqual(
      expectedResult
    );
  });

  it('Return responsive data', () => {
    const expectedResults = [
      media.minQueries.xs`${prop}: ${xsData}`,
      media.minQueries.lg`${prop}: ${lgData}`,
    ];

    expect(
      JSON.stringify(renderResponsiveStyles({ xs: xsData, lg: lgData }, prop))
    ).toEqual(JSON.stringify(expectedResults));
  });

  it('Should not be equal', () => {
    const expectedResults = [media.minQueries.xs`${prop}: ${xsData}`];

    expect(
      JSON.stringify(renderResponsiveStyles({ xs: xsData, lg: lgData }, prop))
    ).not.toEqual(JSON.stringify(expectedResults));
  });
});
