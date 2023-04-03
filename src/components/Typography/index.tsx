import { Typography } from "./styles";

export interface ITypographyProps {
  size?: number;
  color?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
  fontVariant?: 'span' | 'p' | 'small' | 'h1' | 'h2' | 'h3' | 'b' | 'strong';
  children: React.ReactNode;
  marginTop?: string | number;
  marginBottom?: string | number;
}

export const TypographyComponent: React.FC<ITypographyProps> = ({
  fontVariant = 'p',
  children,
  ...rest
}) => {
  const Tag = Typography[fontVariant] || Typography.p;

  return <Tag {...rest}>{children}</Tag>;
};
