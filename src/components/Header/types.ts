export interface IHeaderProps {
  handleLoggoutUser?(): void;
  photo?: string;
  name?: string;
  welcomeMessage?: string;
  isHeaderOnProfile?: boolean;
}