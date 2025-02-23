import { ReactNode } from "react";

export interface popupErrorI {
  message: ReactNode;
  onClose: () => void;
}
