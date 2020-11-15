import i18n from "../../../i18n/i18n";
import * as React from "react";
import Card from "../../molecules/common/Card";


export default (props) => <Card title={i18n.t("welcome.security.title")}>
  <h2>{i18n.t("welcome.security.subtitle")}</h2>
  <h3>
    <p>{i18n.t("welcome.security.trait")}</p>
    <p><b>{i18n.t("welcome.security.advantage")}</b></p>
  </h3>
</Card>