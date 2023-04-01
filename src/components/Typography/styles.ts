import styled, { DefaultTheme, css } from "styled-components";
import { ITypographyProps } from ".";

const getThemeColor = (theme: DefaultTheme, color?: string) => {
  if (!color) return "inherit";
  return theme.pallete[color] || color;
};

const baseTypographyStyles = css<ITypographyProps>`
  font-size: ${({ size }) => size}px;
  color: ${({ theme, color }) => getThemeColor(theme, color)};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight}px;
  margin-top: ${({marginTop}) => marginTop}px;
  margin-bottom: ${({marginBottom}) => marginBottom}px;
`;

const Typography = {
  span: styled.span`${baseTypographyStyles}`,
  p: styled.p`${baseTypographyStyles}`,
  small: styled.small`${baseTypographyStyles}`,
  h1: styled.h1`${baseTypographyStyles}`,
  h2: styled.h2`${baseTypographyStyles}`,
  h3: styled.h3`${baseTypographyStyles}`,
  b: styled.b`${baseTypographyStyles}`,
  strong: styled.strong`${baseTypographyStyles}`,
};

export { Typography };
