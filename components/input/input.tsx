import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classes from './input.module.scss'


export default function InputComponent(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const { className, ...inputProps } = props;
  return <input {...inputProps} className={`${className} ${classes.Input}`} />;
}
