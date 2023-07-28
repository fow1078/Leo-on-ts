import React from "react";
import styled from "styled-components";

interface HistoryListItemProps {
  status: string,
  place: string,
  quantity: string,
  logo: string,
  style?: React.CSSProperties
};

const Wrapper = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.buttonBackground};
  box-shadow: 2px 2px 2px rgba(8, 10, 58, 0.25);
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Status = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3px;
`;

const Place = styled.div`
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


const HistoryListItem: React.FC<HistoryListItemProps> = ({ status, place, quantity, logo, style }: HistoryListItemProps) => {
  return (
    <Wrapper style={style}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img width={40} height={40} src={logo} />
        <div style={{ marginLeft: '20px' }}>
          <Status>
            {status}
          </Status>
          <Place>
            {place}
          </Place>
        </div>
      </div>
      <Quantity>
        {quantity}
      </Quantity>
    </Wrapper>
  );
};

export default HistoryListItem;
