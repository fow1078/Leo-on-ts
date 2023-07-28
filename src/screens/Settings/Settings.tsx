import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useStore } from "../../store/store";
import Address from "../../common/Address";
import ThemeSwitcher from "../../common/ThemeSwitcher";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'

import ChooseLang from "./SettingsPages/language/Language";
import ChangePassword from "./SettingsPages/changepass/changepass";
import TimeLock from "./SettingsPages/timelock/timelock";
import ExportPrivateKey from "./SettingsPages/exportprivatekey/exportprivatekey";
import ChangeWalletName from "./SettingsPages/changewalletname/changewalletname";
import ResetWallet from "./SettingsPages/resetwallet/resetwallet";


const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div`
  padding: 15px;
  background: #191B25;
  box-shadow: 2px 2px 2px rgba(8, 10, 58, 0.25);
  border-radius: 2px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const WrapperTitle = styled.div`  
  font-weight: 500;
  font-size: 16px;  
  color: ${({ theme }) => theme.text}; 
  margin-bottom: 5px;
`;

const WrapperSubTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.dateText}; 
`;


const OptionsContainer = styled.div`
  padding: 0;
  height: 425px;
  overflow-y: scroll;
  ::-webkit-scrollbar {display: none;}
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const WalletNameWrapper = styled.div`
  background: linear-gradient(90deg, rgba(100, 42, 181, 0.5) 0%, rgba(40, 91, 254, 0.5) 100%);
  padding: 15px;
  box-shadow: 2px 2px 2px rgba(8, 10, 58, 0.25);
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const Settings: React.FC = () => {
  const { t } = useTranslation();              
  const { setAddress } = useStore();
  const [activeSettOption, setActiveSettOption] = useState('sett');
  const currentLang = window.localStorage.getItem('WALLET_LANGUAGE');
  return (   
    <>
      {activeSettOption === 'sett' &&
        <Container>
          <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '10px', marginBottom: '40px' }}>
            <Address style={{ marginRight: '10px' }} address="Df3t90fdjvn863ffegeyb5" />
            <ThemeSwitcher />
          </div>

          <OptionsContainer>
            <WalletNameWrapper>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <WrapperTitle>{window.localStorage.getItem('WALLET_NAME') === '' ? 'Wallet Name' : window.localStorage.getItem('WALLET_NAME')}</WrapperTitle>
                <WrapperSubTitle>Df3t90</WrapperSubTitle>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserPen} style={{fontSize: '22px', color: '#fff', }} onClick={() => setActiveSettOption('wallet_name_edit')}/>
              </div>
            </WalletNameWrapper>

            <Wrapper onClick={() => setActiveSettOption('lang')}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <WrapperTitle>{t('lang')}</WrapperTitle>
                <WrapperSubTitle>{t(`${currentLang}`)}</WrapperSubTitle>
              </div>
            </Wrapper>

            <Wrapper onClick={() => setActiveSettOption('change_pass')}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <WrapperTitle>{t('change_pass')}</WrapperTitle>
                <WrapperSubTitle>{t('change_pass_descr')}</WrapperSubTitle>
              </div>
            </Wrapper>

            <Wrapper onClick={() => setActiveSettOption('auto_lock')}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <WrapperTitle>{t('auto_lock')}</WrapperTitle>
                <WrapperSubTitle>{t('auto_lock_descr')}</WrapperSubTitle>
              </div>
            </Wrapper>

            <Wrapper onClick={() => setActiveSettOption('exp_private_key')}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <WrapperTitle>{t('exp_private_key')}</WrapperTitle>
                <WrapperSubTitle>{t('exp_private_key_descr')}</WrapperSubTitle>
              </div>
            </Wrapper>

            <Wrapper onClick={() => setActiveSettOption('res_wallet')}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <WrapperTitle>{t('res_wallet')}</WrapperTitle>
                <WrapperSubTitle>{t('res_wallet_descr')}</WrapperSubTitle>
              </div>
            </Wrapper>
          </OptionsContainer>
        </Container>
      }
      {activeSettOption === 'wallet_name_edit' && 
        <ChangeWalletName />
      }
      {activeSettOption === 'lang' && 
        <ChooseLang />
      }
      {activeSettOption === 'change_pass' &&
        <ChangePassword />
      }
      {activeSettOption === 'auto_lock' &&
        <TimeLock />
      }
      {activeSettOption === 'exp_private_key' &&
        <ExportPrivateKey />
      }
      {activeSettOption === 'res_wallet' && 
        <ResetWallet />
      }
    </> 
  )
}

export default Settings;