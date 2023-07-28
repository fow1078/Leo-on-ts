import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useStore } from "../../../../store/store";
import { faPenToSquare, faChevronRight, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Settings from "../../Settings";
import Button from "../../../../common/Button";
import ThemeSwitcher from "../../../../common/ThemeSwitcher";
import Address from "../../../../common/Address";

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

const LabelInput = styled.label`
  display: flex;
  justify-content: start;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px; 
  font-weight: 500;
`;

const ChangePassword: React.FC = () => {
  const { t } = useTranslation();              
  const { setAddress } = useStore();
  const [addOrBackBtn, setAddOrBackBtn] = useState('change_pass');
  return (
    <>
      {addOrBackBtn === 'change_pass' && 
        <Container>
          <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '10px', marginBottom: '40px' }}>
            <Address style={{ marginRight: '10px' }} address="Df3t90fdjvn863ffegeyb5" />
            <ThemeSwitcher />
          </div>
          <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%', position: 'relative'}}>
            <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: '22px', color: '#fff', position: 'absolute'}} onClick={() => setAddOrBackBtn('sett')}/>
            <ItemTitle>{t('change_pass')}</ItemTitle>
          </div>
          <AddNewMenuContainer>
            <div>
              <LabelInput htmlFor="Current Password">Current Password</LabelInput>
              <AddNewInput type={'text'} name={'Current Password'}/>
            </div>
            <div>
              <LabelInput htmlFor="New Password">New Password</LabelInput>
              <AddNewInput type={'text'} name={'New Password'}/>
            </div>
            <div>
              <LabelInput htmlFor="Confirm New Password">Confirm New Password</LabelInput>
              <AddNewInput type={'text'} name={'Confirm New Password'}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Button style={{ width: '150px', backgroundColor: '#494E64', borderRadius: '10px' }} label={t('cancel')} onPress={() => setAddOrBackBtn('sett')} />
              <Button style={{ width: '150px', backgroundColor: '#285BFE', borderRadius: '10px' }} label={t('save')} onPress={() => {}} />
            </div>
          </AddNewMenuContainer>
        </Container>
      }
      {addOrBackBtn === 'sett' && 
        <Settings />
      }
    </>
  )
}

export default ChangePassword;