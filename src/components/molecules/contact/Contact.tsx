import * as React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import LinkedinIcon from "../../../assets/images/contact/linkedin.svg"
import MessageIcon from "../../../assets/images/contact/message.svg"
import SmartphoneIcon from "../../../assets/images/contact/smartphone.svg"
import TelegramIcon from "../../../assets/images/contact/telegram.svg"
import i18n from "../../../i18n/i18n";

import "../../../assets/styles/components/molecules/contact.scss"

export default (props) => (
  <div className="contact">
    <div className="email">
      <OutboundLink href={`mailto:${props.email}`}>
        <div className="icon">
          <MessageIcon width={100} height={100} />
        </div>
        <div className="data">
          {props.email}
        </div>
      </OutboundLink>
    </div>
    <div className="linkedin">
      <OutboundLink href={props.linkedin}>
        <div className="icon">
          <LinkedinIcon width={90} height={90} />
        </div>
        <div className="data">
          {i18n.t('contact.linkedIn')}
        </div>
      </OutboundLink>
    </div>
    <div className="phone">
      <OutboundLink href={`tel:${props.phone}`}>
        <div className="icon">
          <SmartphoneIcon width={100} height={100} />
        </div>
        <div className="data">
          {i18n.t('contact.call')}
        </div>
      </OutboundLink>
    </div>
    <div className="telegram">
      <OutboundLink href={props.telegram}>
        <div className="icon">
          <TelegramIcon width={100} height={100} />
        </div>
        <div className="data">
          {i18n.t('contact.telegram')}
        </div>
      </OutboundLink>
    </div>
  </div>
)