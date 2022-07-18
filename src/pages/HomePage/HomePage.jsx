import React, { useState, useEffect, useContext } from 'react';
import CardList from "../../components/CardList/CardList";
import CardRegistration from "../../components/CardRegistration/CardRegistration";
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import "../../assets/App.css";
import '../../assets/index.css';
import { getCollection, postDoc, removeDoc } from '../../api/firebaseRepository';
import { AuthContext } from "../../context/authContext";

const HomePage = () => {

  const [cards, setCards] = useState([]);
  const { user } = useContext(AuthContext);
  const getMonths = async () => {
    const monthList = await getCollection('months');
    debugger;
    for (var i = 0; i < monthList.length; i++) {
      var card = {
        idCard: monthList[i].idCard,
        year: monthList[i].year,
        month: monthList[i].month,
        text: monthList[i].text
      };

      const arrayCards = cards;
      if (!cards.find(o => o.idCard === card.idCard)) {
        arrayCards.push(card);
        setCards([...arrayCards]);
      }
    }
  };

  useEffect(() => {
    if (!cards.length) {
      getMonths();
    }
  }, []);


  const createCard = (year, month, text) => {
    debugger;
    const idCard = String(month) + String(year)
    const newCard = { year, month, text, idCard };
    if (!cards.find(o => o.idCard === newCard.idCard)) {
      setCards([...cards, newCard]);
      postDoc("months", idCard, newCard);
    }
    else{
      alert("Mês já cadastrado !");
    }
  };

  const deleteCard = (indexCard) => {
    debugger;
    removeDoc("months", cards[indexCard].idCard);
    const arrayCards = cards;
    arrayCards.splice(indexCard, 1);
    setCards([...arrayCards]);
  };

    if (user.autorization != 1) {
      return (
        <section>
          <AppNavBar></AppNavBar>
          <CardList cards={cards}></CardList>
        </section>
      );
    }
    else {
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