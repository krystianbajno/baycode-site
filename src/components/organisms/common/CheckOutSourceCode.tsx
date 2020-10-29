import {Button} from "../../atoms/common/Button";
import * as React from "react";

import "../../../assets/styles/templates/check-out-source-code.scss"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export default (props) => <div className="check-out-source-code">
  <div className="button-container">
    <OutboundLink href={props.link} >
      <Button className="primary" onPress={props.onPress}>
        I want to see the source code
      </Button>
    </OutboundLink>
  </div>
  <p className="check-out">
    You can check out the source code of this website in the Github repository.
  </p>
</div>