import * as React from "react";

import Card from "../../molecules/common/Card";
import i18n from "../../../i18n/i18n";

export default (props) => <Card title={i18n.t("welcome.engineer.title")}>
  <h2>
    {i18n.t("welcome.engineer.ama")}
    <a href={props.contact?.linkedin}> {i18n.t('welcome.engineer.software-engineer')}</a>
  </h2>
  <h3>
    <p><b>{i18n.t("welcome.engineer.what-i-do")}</b></p>
    <p>
      <a href="https://en.wikipedia.org/wiki/Agile_software_development">
        {i18n.t("welcome.engineer.methodology")}
      </a>
    </p>
    <p><b>{i18n.t("welcome.engineer.subtitle")}</b></p>
  </h3>
</Card>
