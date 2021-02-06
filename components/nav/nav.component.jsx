import { useLinkHover } from "../../hooks/use-link-hover.hook";
import { NavBar, NavItem } from "./nav.styles";

const Nav = () => {
  const linkHover = useLinkHover();

  return (
    <NavBar>
      <NavItem {...linkHover}>Blog</NavItem>
      <NavItem {...linkHover}>Podcasts of mine</NavItem>
    </NavBar>
  );
};

export default Nav;
