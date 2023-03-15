import { SVGProps, forwardRef, memo, Ref } from 'react';
import { theme, ThemeColor } from '../../theme';
import styled, { css } from 'styled-components';
import * as Icons from './iconsContent';

export const IconsContent = Icons;

export type IconName = keyof typeof IconsContent;

export type IconProps = Omit<
  SVGProps<SVGSVGElement>,
  'height' | 'width' | 'fill'
> & {
  name: IconName;
  size?: number | string;
  color?: ThemeColor;
};

const StyledSvg = styled.svg<{ isButton: boolean }>`
  ${({ isButton }) => css`
    cursor: ${isButton ? 'pointer' : 'inherit'};
  `})
`;

const IconComp = (
  { name, size = 24, color, ...rest }: IconProps,
  ref?: Ref<SVGSVGElement>
) => {
  const IconContent = IconsContent[name];
  const stroke = color && theme.colors[color];
  return (
    <StyledSvg
      data-test={`icon-${name}`}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox={`0 0 24 24`}
      isButton={rest.role === 'button'}
      {...rest}
      ref={ref}
    >
      <IconContent />
    </StyledSvg>
  );
};

const ForwardRef = forwardRef(IconComp);
export const Icon = memo(ForwardRef);
