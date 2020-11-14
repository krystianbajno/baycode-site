import {Button} from "../../atoms/common/Button";
import * as React from "react";

import "../../../assets/styles/templates/get-a-quote.scss"
import i18n from "../../../i18n/i18n";

export default (props) => <div className="get-a-quote">
  <Button className="accent big" onPress={props.onPress}>
    {i18n.t('quote')}
  </Button>
</div>