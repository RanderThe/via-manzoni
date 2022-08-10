import React, { useState, useEffect, useContext } from 'react';
import { Spinner } from "react-bootstrap";
import CardList from "../../components/CardList/CardList";
import CardRegistration from "../../components/CardRegistration/CardRegistration";
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import "../../assets/App.css";
import '../../assets/index.css';
import { getCollection, postDoc, removeDoc } from '../../api/firebaseRepository';
import { AuthContext } from "../../context/authContext";
import Loading from '../../components/Loading/Loading';

const HomePage = () => {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const getMonths = async () => {

    const monthList = await getCollection('months');

    for (var i = 0; i < monthList.length; i++) {
      var card = {
        idCard: monthList[i].idCard,
        year: monthList[i].year,
        month: monthList[i].month,
        text: monthList[i].text,
        expenses: monthList[i].expenses
      };

      const arrayCards = cards;
      if (!cards.find(o => o.idCard === card.idCard)) {
        arrayCards.push(card);
        setCards([...arrayCards]);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!cards.length) {
      console.log("passou");
      getMonths();
    }
  }, []);


  const createCard = (year, month, text) => {
    const idCard = String(month) + String(year)
    const newCard = { year, month, text, idCard };
    if (!cards.find(o => o.idCard === newCard.idCard)) {
      setCards([...cards, newCard]);
      postDoc("months", idCard, newCard);
    }
    else {
      alert("Mês já cadastrado !");
    }
  };

  const deleteCard = (indexCard) => {
    removeDoc("months", cards[indexCard].idCard);
    const arrayCards = cards;
    arrayCards.splice(indexCard, 1);
    setCards([...arrayCards]);
  };


  if (isLoading) {
    return (
      <Loading msgLoading="Carregando meses..." />
    );
  }

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