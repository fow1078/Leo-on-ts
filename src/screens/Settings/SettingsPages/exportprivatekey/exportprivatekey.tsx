import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useStore } from "../../../../store/store";
import Address from "../../../../common/Address";
import ThemeSwitcher from "../../../../common/ThemeSwitcher";
import { faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Settings from "../../Settings";
import Button from "../../../../common/Button";
import ShowPrivateKey from "./showPrivateKey";


const Container = styled.div`
  padding: 20px;
`;

const ItemTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 26px;
  width: 100%;
`;	

const AddNewMenuContainer = styled.div`
  padding: 20px 10px;
`;

const AddNewInput = styled.input`
  height: 30px;
  border: none;
  padding: 7px;
  margin-bottom: 15px;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  background: rgba(73, 78, 100, 0.7);
  border-radius: 6px;
  width: -webkit-fill-available;
`;

const WrapperSubTitle = styled.div`
  font-weight: 500;
  font-size: 14px;  
  color: ${({ theme }) => theme.dateText}; 
  margin-bottom: 10px;
`;

const ExportPrivateKey: React.FC = () => {
	const { t } = useTranslation();              
  const { setAddress } = useStore();
  const [addOrBackBtn, setAddOrBackBtn] = useState('exportkey');
  return (
    <>
      {addOrBackBtn === 'exportkey' && 
        <Container>
          <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '10px', marginBottom: '40px' }}>
            <Address style={{ marginRight: '10px' }} address="Df3t90fdjvn863ffegeyb5" />
            <ThemeSwitcher />
          </div>
          <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%', position: 'relative'}}>
            <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: '22px', color: '#fff', position: 'absolute'}} onClick={() => setAddOrBackBtn('sett')}/>
            <ItemTitle>{t('exp_private_key')}</ItemTitle>
          </div>
          <AddNewMenuContainer>
            <WrapperSubTitle>Enter your wallet password in order to show your private key</WrapperSubTitle>
            <AddNewInput type={'text'} placeholder={'Password'} name={'Change auto lock time'}/>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Button style={{ width: '150px', backgroundColor: '#494E64', borderRadius: '10px' }} label={t('cancel')} onPress={() => setAddOrBackBtn('sett')} />
              <Button style={{ width: '150px', backgroundColor: '#285BFE', borderRadius: '10px' }} label={t('continue')} onPress={() => setAddOrBackBtn('showPrivateKey')} />
            </div>
          </AddNewMenuContainer>
        </Container>
      }
      {addOrBackBtn === 'sett' && 
        <Settings />
      }
      {addOrBackBtn === 'showPrivateKey' && 
        <ShowPrivateKey />
      }
    </>
  )
}

export default ExportPrivateKey;