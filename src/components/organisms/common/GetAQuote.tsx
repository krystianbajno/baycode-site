import {Button} from "../../atoms/common/Button";
import * as React from "react";

import "../../../assets/styles/templates/get-a-quote.scss"

export default (props) => <div className="get-a-quote">
  <Button className="accent big" onPress={props.onPress}>
    Let's build a business!
  </Button>
</div>