import { TextAlignE, TextVariantE } from "@/common/enums";

export interface baseTextI {
  children: string;
  variant?: TextVariantE;
  align?: TextAlignE;
}

export interface ClickableTextI extends baseTextI {
  onClickHandler: () => void;
}
