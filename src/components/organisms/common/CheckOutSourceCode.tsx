import {Button} from "../../atoms/common/Button";
import * as React from "react";

import "../../../assets/styles/templates/check-out-source-code.scss"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import i18n from "../../../i18n/i18n";

export default (props) => <div className="check-out-source-code">
  <div className="button-container">
    <OutboundLink href={props.link} >
      <Button className="primary" onPress={props.onPress}>
        {i18n.t("check-out-source.i-want-to-see")}
      </Button>
    </OutboundLink>
  </div>
  <p className="check-out">
    {i18n.t("check-out-source.you-can-check-out")}
  </p>
</div>