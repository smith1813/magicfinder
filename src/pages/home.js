import { useState } from "react";
import React from "react";
import SearchPage from "../searchPage"
import ActionBar from "../actionsBar";
import NavigationBar from "../navBar";
import { sortCards } from "../utils";


export default function Home() {

  const defaultCardlistState = null;
  const defaultSearchPlaceholder = "search card's name";
  const defaultSortSelectValue = "ascending-name";

  const [cardList, setCardList] = useState(defaultCardlistState);
  const [searchPlaceholder, setSearchPlaceholder] = useState(defaultSearchPlaceholder);
  const [sortSelectValue, setSortSelectValue] = useState(defaultSortSelectValue);

    function handleCardList(e){
          setCardList(e);
    }

    //todo: hacer funciones para llamadas mas expresivas a la API (buscador avanzado)
    function fetchAPI(e){
      let q= e;
      fetch(encodeURI('https://api.scryfall.com/cards/search?q='+q))
          .then( res =>  {
          return res.json()})
          .then(j => {
            handleCardList(j.data)
          }
            )
      .catch( error => alert(error));
    }

    // cuando se hace una nueva llamada a la api, se resetea el estado del sort
    function handleSubmit(e){
      e.preventDefault();
      const searchQueue = e.target.search_queue.value;
      setSearchPlaceholder(defaultSearchPlaceholder);
      setSortSelectValue(defaultSortSelectValue);
      fetchAPI(searchQueue);
    }

    function handleSortSelectChange(e){
      if(cardList === null) return;
      const sortValue = e.target.value;
      const [order, key] = sortValue.split('-',2);
      let orderedCardList = cardList.slice();
      orderedCardList = sortCards(orderedCardList, key, order);
      setSortSelectValue(order+"-"+key);
      setCardList(orderedCardList);
    }

  return (
    <React.Fragment>
      <div name="all-container" className='bg-slate-400 h-20'>
        <NavigationBar handleSubmit={handleSubmit} searchPlaceholder={searchPlaceholder}/>
        <ActionBar handleSortSelectChange={handleSortSelectChange} sortSelectValue={sortSelectValue}/>
        <SearchPage cardList={cardList}/>
      </div>
    </React.Fragment>
  );
}
