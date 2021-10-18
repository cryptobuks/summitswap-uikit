import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import CashState from "./CashState";
import { FacebookIcon, DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "../icons";

interface Props extends PanelProps, PushedProps { }

const Container = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 3;
  flex: 1.3;
  padding: 35px 10px 0 30px;
  background-color: transparent;
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
`;

const SocialEntry = styled.div`
  margin-top: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  >svg {
    cursor: pointer;
    width: 20px; height: 20px;
    fill: ${({ theme }) => theme.colors.sidebarColor}
  }
  >svg+svg {
    margin-left: 5px;
  }
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  // if (!isPushed) {
  //   return (
  //     <Container>
  //       <IconButton variant="text" onClick={() => pushNav(true)}>
  //         <CogIcon />
  //       </IconButton>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      {/* <SocialEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
        <SocialLinks />
      </SocialEntry> */}
      <SettingsEntry>
        <CashState />
        {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
      </SettingsEntry>
      <SocialEntry>
        <DiscordIcon />
        <TelegramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
