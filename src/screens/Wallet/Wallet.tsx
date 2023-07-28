import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import Button from "../../common/Button";
import CurrencyListItem from "../../common/CurrencyListItem";
import { getIcon } from "../../utils/getIcon";
import Address from "../../common/Address";
import { useStore } from "../../store/store";
import ThemeSwitcher from "../../common/ThemeSwitcher";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 34px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

const mockItems = [
  {
    name: 'Aleo',
    price: 4.04708,
    quantity: 25.5,
  },
/*   {
    name: 'USDC',
    price: 2.04708,
    quantity: 0.0,
  }, */
];

const Wallet: React.FC = () => {
  const { t } = useTranslation();
  const { setAddress } = useStore();
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '10px', marginBottom: '40px' }}>
        <Address style={{ marginRight: '10px' }} address="Df3t90fdjvn863ffegeyb5" />
        <ThemeSwitcher />
      </div>
      <Title>
        25.0 ALEO
      </Title>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '35px' }}>
        <Button style={{ marginRight: '20px', width: '130px' }} label={t('receive')} onPress={() => {}} />
        <Button style={{ width: '130px' }} label={t('send')} onPress={() => setAddress('drefrf')} />
      </div>
      {mockItems.map((item: any) => (
        <CurrencyListItem
          key={item.name}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          logo={getIcon(item.name)}
        />
      ))}
    </Container>
  );
};

export default Wallet;
