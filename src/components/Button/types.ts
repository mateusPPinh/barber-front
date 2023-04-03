import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  isDisabled?: boolean;
  onClick?(): void;
}