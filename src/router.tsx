import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useThemeContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./theme";
import { FaWallet } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { BiShuffle } from 'react-icons/bi';
import { MdHistory } from 'react-icons/md';
import { BsSliders } from 'react-icons/bs';
import Wallet from "./screens/Wallet/Wallet";
import Gallery from "./screens/Gallery/Gallery";
import { useStore } from "./store/store";
import Login from "./screens/Login/Login";
import Settings from "./screens/Settings/Settings";
import History from "./screens/History/History";

type TabProps = {
  active: boolean;
};

const ScreenContainer = styled.div`
  position: relative;
  height: 600px;
  width: 400px;
  background: #272935;
`;

const TabsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  padding-left: 17px;
  padding-right: 17px;
  background: ${({ theme }) => theme.buttonBackground};
  box-shadow: 0px -4px 4px rgba(11, 8, 45, 0.25);
  width: 100%;
`;

const Tab = styled.div<TabProps>`
  padding-top: 17.5px;
  padding-bottom: 19.5px;
  margin-right: 29px;
  text-align: center;
  width: 50px;
  cursor: pointer;
  color: ${({ theme, active }) => active ? theme.text : '#797575'};
  border-top: ${({ active }) => active ? '2px solid #0C3BDF' : ''};
`;

const Router: React.FC = () => {
  const { mode } = useThemeContext();
  const [activeTab, setActiveTab] = useState('wallet');
  const { isFirstTime } = useStore();
  console.log(isFirstTime);
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <ScreenContainer>
        {!isFirstTime ? <>
          {activeTab === 'wallet' &&
            <Wallet />
          }
          {activeTab === 'gallery' &&
            <Gallery />
          }
          {activeTab === "history" &&
            <History />
          }
          {activeTab === "settings" &&
            <Settings />
          }
          <TabsContainer>
            <Tab onClick={() => setActiveTab('wallet')} active={activeTab === 'wallet'}>
              <FaWallet size={24} />
            </Tab>
            <Tab onClick={() => setActiveTab('gallery')} active={activeTab === 'gallery'}>
              <CgMenuGridR size={24} />
            </Tab>
            <Tab onClick={() => setActiveTab('transfer')} active={activeTab === 'transfer'}>
              <BiShuffle size={24} />
            </Tab>
            <Tab onClick={() => setActiveTab('history')} active={activeTab === 'history'}>
              <MdHistory size={24} />
            </Tab>
            <Tab onClick={() => setActiveTab('settings')} active={activeTab === 'settings'}>
              <BsSliders size={24} />
            </Tab>
          </TabsContainer>
        </> : <Login />}
      </ScreenContainer>
    </ThemeProvider>
  );
};

export default Router;
