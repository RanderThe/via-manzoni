import React, { useState, useEffect } from 'react';
import CardList from "../../components/CardList/CardList";
import CardRegistration from "../../components/CardRegistration/CardRegistration";
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import "../../assets/App.css";
import '../../assets/index.css';
import { getCollection } from '../../api/firebaseRepository';

const HomePage = () => {

  const [cards, setCards] = useState([]);

  const getMonths = async () => {
    console.log("passou no getMonth");
    const monthList = await getCollection('months');
    debugger;
    for (var i = 0; i < monthList.length; i++) {
      var card = {
        year: monthList[i].year,
        month: monthList[i].month,
        text: monthList[i].text,
        key: monthList[i].key
      };

      const arrayCards = cards;
      if (!cards.find(o => o.year === card.year && o.month === card.month)) {
        arrayCards.push(card);
        setCards([...arrayCards]);
      }
    }
  };

  useEffect(() => {
    if (!cards.length) {
      console.log("passou no useEffect");
      getMonths();
    }
  }, []);


  const createCard = (year, month, text) => {
    debugger;
    const newCard = { year, month, text };

    if (!cards.find(o => o.year === newCard.year && o.month === newCard.month))
      setCards([...cards, newCard]);
  };

  const deleteCard = (indexCard) => {
    const arrayCards = cards;
    arrayCards.splice(indexCard, 1);
    setCards([...arrayCards]);
  };

  if (cards.length) {
    return (
      <section>
        <AppNavBar></AppNavBar>
        <CardRegistration createCard={createCard.bind(this)}></CardRegistration>
        <CardList deleteCard={deleteCard.bind(this)} cards={cards}></CardList>
      </section>
    );
  }
}


export default HomePage;