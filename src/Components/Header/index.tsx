import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Scroll, Timer } from "phosphor-react";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to={"/"} title="Timer" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to={"/history"} title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
