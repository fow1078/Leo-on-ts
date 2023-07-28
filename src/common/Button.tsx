import React from "react";
import styled from 'styled-components';

interface ButtonProps {
  label: string,
  onPress: () => void,
  style?: React.CSSProperties,
}

const Wrapper = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.buttonBackground};
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(8, 10, 58, 0.25);
  border-radius: 2px;
`;

const Button: React.FC<ButtonProps> = ({ label, style, onPress }: ButtonProps) => {
  return (
    <Wrapper style={style} onClick={onPress}>
      {label}
    </Wrapper>
  );
};

export default Button;
