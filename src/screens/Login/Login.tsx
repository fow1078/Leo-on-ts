import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import logo from '../../assets/images/logo.png';
import Button from "../../common/Button";
import { useStore } from "../../store/store";

const Container = styled.div`
  padding: 20px;
`;

const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  text-align: center;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  text-align: center;
`;

const BottomContainer = styled.div`
  padding-right: 20px;
  padding-left: 20px;
`;

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { setIsFirstTime } = useStore();
  return (
   <Container>
    <LogoContainer>
      <img width={160} height={160} src={logo} alt="logo" />
    </LogoContainer>
    <Title>
      {t('welcome')}
    </Title>
    <SubTitle>
      {t('connecting')}
    </SubTitle>
    <BottomContainer>
      <Button style={{ marginBottom: '18px'}} onPress={() => setIsFirstTime(false)} label={t('create_wallet')}/>
      <Button style={{ marginBottom: '18px' }} onPress={() => {}} label={t('import_secret')}/>
      <Button onPress={() => {}} label={t('import_key')} />
    </BottomContainer>
   </Container>
  );
};

export default Login;
