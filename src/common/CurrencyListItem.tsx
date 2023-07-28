import React from "react";
import styled from "styled-components";

interface CurrencyListItemProps {
  name: string,
  price: number,
  quantity: number,
  logo: string,
};

const Wrapper = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.buttonBackground};
  box-shadow: 2px 2px 2px rgba(8, 10, 58, 0.25);
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3px;
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #797575;
`;

const Quantity = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

const CurrencyListItem: React.FC<CurrencyListItemProps> = ({ name, price, quantity, logo }: CurrencyListItemProps) => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img width={40} height={40} src={logo} alt={name} />
        <div style={{ marginLeft: '20px' }}>
          <Name>
            {name}
          </Name>
          <Price>
            {price + ' ' + name.toUpperCase()}
          </Price>
        </div>
      </div>
      <Quantity>
        {quantity}
      </Quantity>
    </Wrapper>
  );
};

export default CurrencyListItem;
