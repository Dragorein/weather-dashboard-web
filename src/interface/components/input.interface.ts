import React from "react";

export interface baseInputI {
  id: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //   type?:
  required?: boolean;
  rows?: number;
  placeholder?: string;
  value: string;
}
