import React from 'react';
import '../../App.css';
import BodyRate from '../BodyRate';
import Footer from '../Footer';
import HeroSectionRate from '../HeroSectionRate';

import RateItem from "../RateItem";
import "./Rates.css";

function Rates(props) {
  return (
    <div className="rates">
      <HeroSectionRate />
      <BodyRate />
      <ExpenseItem
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}
      />
      <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
      />
      <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
      />
      <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
      />
      
      <Footer />
    </div>
  );
}

export default Rates;
