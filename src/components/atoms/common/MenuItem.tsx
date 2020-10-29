import * as React from "react";
import "../../../assets/styles/components/common/menu-item.scss"

interface Props {
  children: string,
  className?: any,
  onPress?: () => void
}

export default (props: Props) => <div
  className={`menu-item ${props.className}`}
  onClick={props.onPress}
>
  {props.children}
</div>
