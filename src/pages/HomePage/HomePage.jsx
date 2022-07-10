import React, { useState, useEffect } from 'react';
import CardList from "../../components/CardList/CardList";
import CardRegistration from "../../components/CardRegistration/CardRegistration";
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import "../../assets/App.css";
import '../../assets/index.css';
import { getFirebase } from '../../api/firebaseRepository';

const HomePage = () => {

  const [cards, setCards] = useState([]);
  /*
  const [test, setTest] = useState([]);

  //remover
  const fetchCoin = async () => {
    const data = await getFirebase('users');
    setTest(data);
    console.log("homepage");
    console.log(data);
  };
*/

  useEffect(() => {
    //fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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