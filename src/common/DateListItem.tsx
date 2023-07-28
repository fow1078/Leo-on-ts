import React from "react";
import styled from "styled-components";

interface DateListItemProps {
  date_line: string,
};

const DateLine = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.dateText};
  margin-bottom: 10px;
`;

const DateListItem: React.FC<DateListItemProps> = ({date_line}: DateListItemProps) => {
  return (
    <DateLine>
      {date_line}
    </DateLine>
  );
};
  
export default DateListItem;