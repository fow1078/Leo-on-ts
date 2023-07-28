import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import HistoryListItem from "../../common/HistoryListItem";
import { getIcon } from "../../utils/getIcon";
import { useStore } from "../../store/store";
import Address from "../../common/Address";
import DateListItem from "../../common/DateListItem";
import ThemeSwitcher from "../../common/ThemeSwitcher";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 26px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 15px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  padding: 0;
  height: 395px;
  overflow-y: scroll;
  ::-webkit-scrollbar {display: none;}
  -ms-overflow-style: none;
  scrollbar-width: none;
`; 

const MockTransactions = [
  {
    currency: "BTC",
    quantity: "0.74",
    status: "Sent",
    place: "9efnje23",
    date: "2022-06-04"
  },
  {
    currency: "USDT",
    quantity: "46.74",
    status: "Received",
    place: "Account1",
    date: "2022-06-04"
  },
  {
    currency: "Aleo",
    quantity: "2.05",
    status: "Received",
    place: "Account1",
    date: "2022-06-04"
  },
  {
    currency: "USDC",
    quantity: "100.75",
    status: "Sent",
    place: "9efnje23",
    date: "2022-04-08"
  },
  {
    currency: "Aleo",
    quantity: "15.00",
    status: "Sent",
    place: "9efnje23",
    date: "2022-05-14"
  }
]

function historyGenerator(history: any) {
  history.sort((c: any, d: any) => {
    let cDate = new Date(c.date);
    let dDate = new Date(d.date);
    let newCDate = cDate.toDateString().split(' ').slice(1).join(' ');
    let newDDate = dDate.toDateString().split(' ').slice(1).join(' ');
    c.date = newCDate;
    d.date = newDDate;
    return new Date(d.date).getTime() - new Date(c.date).getTime();
  });
}
historyGenerator(MockTransactions);

let sortedDates: any[] = [];
function generateDates(history: any) {
  const templeSet = new Set();
  history.forEach((item: any) => {
    templeSet.add(item.date);
  });
  templeSet.forEach((elem: any) => {
    const templeArr: any[] = [];
    history.forEach((itm: any) => {
      if (itm.date === elem) {
        templeArr.push(itm);
      }
    })
    sortedDates.push({
      date: elem,
      values: templeArr
    })
  })
}
generateDates(MockTransactions);

const History: React.FC = () => {
  const { t } = useTranslation();
  const { setAddress } = useStore();
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '10px', marginBottom: '40px' }}>
        <Address style={{ marginRight: '10px' }} address="Df3t90fdjvn863ffegeyb5" />
        <ThemeSwitcher />
      </div>
      <Title>{t("history_title")}</Title>
      <Wrapper>
        {sortedDates.map((item: any, i: number) => {
          return (
            <>
              <DateListItem 
                date_line={item.date}
              />
              {item.values.map((elem:any, ind: number) => (
                <HistoryListItem 
                  key={ind}
                  status={elem.status}
                  place={elem.status == 'Received' ? t("from") + ": " + elem.place : t("to") + ": " + elem.place}
                  quantity={elem.status == "Received" ? "+" + elem.quantity + elem.currency.toUpperCase() : "-" + elem.quantity + elem.currency.toUpperCase()}
                  logo={getIcon(elem.currency)}
                  style={i === sortedDates.length - 1 && ind === item.values.length - 1 ? {marginBottom: "100px"} : {}}
                />
              ))}
            </>
          )
        })}
      </Wrapper>
    </Container>
  );
}

export default History;