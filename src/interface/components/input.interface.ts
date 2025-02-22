import React from "react";

export interface baseInputI {
  id: string;
  name: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //   type?:
  required?: boolean;
  rows?: number;
  placeholder?: string;
  value: string;
}

export interface PasswordInputI extends baseInputI {
  show: boolean;
  showHandler: () => void;
}
