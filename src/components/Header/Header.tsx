import React, { FC } from "react";
import { HeaderContainer, NavList, NavListItem, NavLink } from "./Header.styles";

const Header: FC = () => {
 return (
    <HeaderContainer>
        <nav>
            <NavList>
                <NavListItem><NavLink href="#">Home</NavLink></NavListItem>
                <NavListItem><NavLink href="#">About</NavLink></NavListItem>
                <NavListItem><NavLink href="#">Projects</NavLink></NavListItem>
                <NavListItem><NavLink href="#">Contact</NavLink></NavListItem>
            </NavList>
        </nav>
    </HeaderContainer>
    );
};

export default Header;