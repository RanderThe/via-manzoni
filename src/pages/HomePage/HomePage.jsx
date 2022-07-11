import React, { useState, useEffect } from 'react';
import CardList from "../../components/CardList/CardList";
import CardRegistration from "../../components/CardRegistration/CardRegistration";
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import "../../assets/App.css";
import '../../assets/index.css';
import { getCollection } from '../../api/firebaseRepository';

const HomePage = () => {

  const collection = [];
  const [cards, setCards] = useState(collection);

  //remover
  const getMonths = async () => {
    while (collection.length) { collection.pop(); }
    const monthList = await getCollection('months');
    debugger;
    for (var i = 0; i < monthList.length; i++) {
      var card = {
        year: monthList[i].year,
        month: monthList[i].month,
        text: monthList[i].text,
        key: monthList[i].key
      };
      setCards([...cards, card]);
      if (!collection.find(o => o.year === card.year && o.month === card.month))
        collection.push(card);
    }
    collection.forEach(element => {
      setCards([...cards, element]);
    });
    console.log(cards);
  };


  useEffect(() => {
    getMonths();
  }, []);

  const createCard = (year, month, text) => {
    const newCard = { year, month, text };
    console.log(cards);
    if (!cards.find(o => o.year === newCard.year && o.month === newCard.month))
      setCards([...cards, newCard]);
  };

  const deleteCard = (indexCard) => {
    const arrayCards = cards;
    arrayCards.splice(indexCard, 1);
    setCards([...arrayCards])
  };

  return (
    <section>
      <AppNavBar></AppNavBar>
      <CardRegistration createCard={createCard.bind()}></CardRegistration>
      <CardList deleteCard={deleteCard.bind()} cards={cards}></CardList>
    </section>
  );
}


export default HomePage;