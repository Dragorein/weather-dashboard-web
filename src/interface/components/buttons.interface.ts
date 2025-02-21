import { ButtonVariantE } from "@/enums";
import { ReactNode } from "react";

export interface baseButtonI {
  children: ReactNode;
  onClickHandler: () => void;
  disabled?: boolean;
  variant?: ButtonVariantE;
}

export interface iconButtonI extends baseButtonI {
  icon: ReactNode;
}
