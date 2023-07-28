import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useStore } from "../../../../store/store";
import Address from "../../../../common/Address";
import ThemeSwitcher from "../../../../common/ThemeSwitcher";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Settings from "../../Settings";

type SelectedLangProps = {
  active: boolean;
}

const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div<SelectedLangProps>`

  
  padding: 15px;
  background: ${({ active }) => active ? '#494E64' : '#191B25'};
  box-shadow: 2px 2px 2px rgba(8, 10, 58, 0.25);
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
`;
const WrapperTitle = styled.div`  
  font-weight: 500;
  font-size: 16px;  
  color: ${({ theme }) => theme.text}; 
`;

const ItemTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 26px;
  width: 100%;
`;
const ChooseLang: React.FC = () => {
  const { t } = useTranslation();              
  const { setAddress } = useStore();
  const [selectedLang, setSelectedLang] = useState(window.localStorage.getItem('WALLET_LANGUAGE'));
  const [chooseTab, setChosenTab] = useState('Current')
  return (
    <>
      {chooseTab === 'Current' &&
      <Container>
        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '10px', marginBottom: '40px' }}>
          <Address style={{ marginRight: '10px' }} address="Df3t90fdjvn863ffegeyb5" />
          <ThemeSwitcher />
        </div>
        <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%'}}>
          <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: '22px', color: '#fff', position: 'fixed'}} onClick={() => setChosenTab('backTo')}/>
          <ItemTitle>{t('lang')}</ItemTitle>
        </div>
        <div style={{padding: '10px 0'}}>
          <Wrapper active={selectedLang === 'en'} onClick={() => {
              window.localStorage.setItem('WALLET_LANGUAGE', 'en');
              let windowLang: any = window.localStorage.getItem('WALLET_LANGUAGE');
              setSelectedLang(windowLang);
            }}>
            <WrapperTitle>{t('en')}</WrapperTitle>
          </Wrapper>

          <Wrapper active={selectedLang === 'ua'} onClick={() => {
            window.localStorage.setItem('WALLET_LANGUAGE', 'ua');
            let windowLang: any = window.localStorage.getItem('WALLET_LANGUAGE');
            setSelectedLang(windowLang);
          }}>
            <WrapperTitle>{t('ua')}</WrapperTitle>
          </Wrapper>
        </div>
      </Container>
      }
      {chooseTab === 'backTo' && 
        <Settings/>
      }
      
    </>
  )
}

export default ChooseLang;