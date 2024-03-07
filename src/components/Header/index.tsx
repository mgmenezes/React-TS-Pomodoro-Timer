import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import { BellRinging, Scroll, Timer } from "phosphor-react";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BellRinging size={48} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={48} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={48} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
