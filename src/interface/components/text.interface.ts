import { TextAlignE, TextVariantE } from "@/enums";

export interface baseTextI {
  children: string;
  variant?: TextVariantE;
  align?: TextAlignE;
}

export interface ClickableTextI extends baseTextI {
  onClickHandler: () => void;
}
