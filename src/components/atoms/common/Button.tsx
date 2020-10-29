import * as React from "react";

import "../../../assets/styles/components/common/button.scss"

interface Props {
  children: string,
  className?: any,
  onPress?: (e) => void,
  loading?: boolean
  disabled?: boolean
}

export const Button = (props: Props) => {
  const available = !props.disabled && !props.loading
  const onClick = available ? props.onPress : () => {}

  return <button
    className={`button ${props.className} ${props.loading && 'loading'} ${props.disabled && 'disabled'}`}
    onClick={onClick}
  >
    {props.children}
  </button>
}