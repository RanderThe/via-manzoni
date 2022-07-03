import React, { useState, useContext } from 'react';
import CardList from "../../components/CardList/CardList";
import CardRegistration from "../../components/CardRegistration/CardRegistration";
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import "../../assets/App.css";
import '../../assets/index.css';
import { AuthContext } from "../../context/authContext";


const HomePage = () => {

  const [cards, setCards] = useState([]);

  const createCard = (year, month, text) => {
    const newCard = { year, month, text };
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
      <CardRegistration createCard={createCard.bind(this)}></CardRegistration>
      <CardList deleteCard={deleteCard.bind(this)} cards={cards}></CardList>
    </section>
  );
}


export default HomePage;