import * as React from "react";
import "../../../assets/styles/header.scss";
import MenuItem from "../../atoms/common/MenuItem";
import Logo from "../../atoms/common/Logo";
import useGrowingText from "../../hooks/useGrowingText";
import MenuEntry from "../../../menu/models/MenuEntry"
import {redirect} from "../../../utils/navigation"

const Header = (props) => {
  const logo = useGrowingText("baycode", 10)
  const {menu} = props

  return <div className="header">
    <div className="header-contents">
      <div className="logo-section">
        <Logo onPress={() => redirect('/')} logo={logo} />
      </div>
      <div className="menu">
        {menu && menu.getMenuEntries().map((entry: MenuEntry, key) => (
          <MenuItem
            key={key}
            className={entry.getHiddenMobile() ? "hidden-mobile" : ''}
            onPress={entry.getOnPress() || null}
          >
            {entry.getTitle()}
          </MenuItem>
        ))}
      </div>
    </div>
  </div>
}

export default Header;



