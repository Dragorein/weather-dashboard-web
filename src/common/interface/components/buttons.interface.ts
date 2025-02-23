import { ButtonVariantE } from "@/common/enums";
import { ReactNode } from "react";

export interface baseButtonI {
  children: ReactNode;
  onClickHandler: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: ButtonVariantE;
}

export interface iconButtonI extends baseButtonI {
  icon: ReactNode;
}
