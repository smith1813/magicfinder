import { useState } from "react";
import React from "react";
import SearchArea from "../display/searchPage"
import ActionBar from "../layout/actionsBar";
import NavigationBar from "../layout/navBar";
import { sortCards } from "../utils";


export default function Home() {

  const defaultCardlistState = null;
  const defaultSearchPlaceholder = "search card's name";
  const defaultSortSelectValue = "ascending-name";

  const [cardList, setCardList] = useState(defaultCardlistState);
  const [searchPlaceholder, setSearchPlaceholder] = useState(defaultSearchPlaceholder);
  const [sortSelectValue, setSortSelectValue] = useState(defaultSortSelectValue);


    //todo: hacer funciones para llamadas mas expresivas a la API (buscador avanzado)
    function fetchAPI(e){
      let q= e;
      fetch(encodeURI('https://api.scryfall.com/cards/search?q='+q))
          .then( res =>  {
          return res.json()})
          .then(j => {
            //si viene un j.status === 404, hacer algo
            if(j.status === 404){
              console.log("llego un error 404 por la API");
            } else {
              handleCardList(j.data)
            }
          }
            )
      .catch( error => alert(error));
    }

    // currently won't 
    function handleCardList(e){
      setCardList(e);
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
      <div name="nav-container" className='bg-slate-400'>
        <NavigationBar handleSubmit={handleSubmit} searchPlaceholder={searchPlaceholder}/>
      </div>
      <div name="cation-bar-container">
        <ActionBar handleSortSelectChange={handleSortSelectChange} sortSelectValue={sortSelectValue}/>
      </div>
      <div name="search-page-container "
          className="bg-red h-screen ">
        <SearchArea cardList={cardList}/>
      </div>
      
    </React.Fragment>
  );
}
