import { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons"

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  labelError?: boolean;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>
}