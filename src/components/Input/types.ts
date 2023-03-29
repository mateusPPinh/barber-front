import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  labelError?: boolean;
  label?: string;
}