import React from "react";
import styled from "styled-components";
import { theme } from "../../../../data/theme";
import { ShopContext } from "../../../../context/ShopContext";
import ButtonX from "../../../subatoms/button/ButtonX";
import { LogoImg } from "../../../../styles/styles";
import logo from "./../../../../styles/images/logonorris.png";

const LogoutPopUp = styled.div`
  background-color: ${theme.colors.primary};
  width: ${theme.sizes.modals.mobile.width};
  height: ${theme.sizes.modals.mobile.height};
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  top: ${(p) => p.type === "home" && `-${theme.spacer}`};
  left: ${(p) => p.type === "home" && `calc(-100vw + 3 * ${theme.spacer})`};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
    height: ${theme.sizes.modals.login.height};
    position: sticky;
    right: 0px;
    position: ${(p) => p.type !== "home" && "absolute"};
    left: ${(p) => p.type !== "home" && "auto"};
    right: ${(p) => p.type !== "home" && "0"};
    top: ${(p) => p.type !== "home" && `calc(12 * ${theme.spacer})`};
  }
`;
const LogoutLogoContainer = styled.div`
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: calc(3 * ${theme.spacer});
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
  }
`;
const LogoutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - ${theme.sizes.buttons.XL});
  justify-content: center;
  @media (min-width: ${theme.viewport.tablet}) {
    height: calc(${theme.sizes.modals.login.width} - ${theme.sizes.buttons.M});
  }
`;

const LogoutModal = (props) => (
  <ShopContext.Consumer>
    {(value) => (
      <LogoutPopUp type={props.type}>
        <LogoutLogoContainer>
          <LogoImg src={logo} alt="Norris Inc. logo" />
          <ButtonX
            action={value.loginIconToggle}
            size="XL"
            text="X"
            color="light"
          />
        </LogoutLogoContainer>

        <LogoutTextContainer>
          <ButtonX
            action={value.logout}
            size="XL"
            text="Logout"
            color="light"
          />
        </LogoutTextContainer>
      </LogoutPopUp>
    )}
  </ShopContext.Consumer>
);
export default LogoutModal;