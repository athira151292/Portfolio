import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
    box-sizing: border-box;
    background-color: #f2eee6;
    height: 75px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`
export const NavList = styled.ul`
    list-style-type: none;
    text-transform: uppercase;
    display: flex;
    margin: 0;
`
export const NavListItem = styled.li`
    min-width: 100px;   
    padding: 10px 20px;
    font-weight: 500;
    text-align: center;
`
export const NavLink = styled.a`
    color: #442c25;
    text-decoration: none;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        height: 2px;
        background-color: #442c25;
        width: 0;
        transition: all 0.3s ease-in-out;
        bottom: -3px;
    }
    &:hover:before {
        width: 100%;
    }
    &:hover {
        font-weight: bold;
    }
`