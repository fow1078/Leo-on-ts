import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from 'react-icons/io';

const Wrapper = styled.div`
  padding: 10px 14px;
  background: ${({ theme }) => theme.buttonBackground};
  box-shadow: 2px 2px 2px rgba(8, 10, 58, 0.25);
  border-radius: 100px;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
`;

interface AddressProps {
  address: string,
  style?: React.CSSProperties
};

const Address: React.FC<AddressProps> = ({ address, style }: AddressProps) => {
  return (
    <div style={{ ...style, display: 'flex', justifyContent: 'end' }}>
      <Wrapper>
        {address.slice(0, 7) + '....' + address.slice(address.length - 3, address.length)}
        <div style={{ marginLeft: '7px' }}>
          <IoIosArrowDown size={16} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Address;
