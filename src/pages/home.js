import { useState } from "react";
import React from "react";
import SearchArea from "../display/searchArea"
import ActionBar from "../layout/actionsBar";
import NavigationBar from "../layout/navBar";
import { sortCards } from "../utils";


export default function Home() {

  const defaultCardlistState = null;
  const defaultSearchPlaceholder = "search card's name";
  const defaultSortSelectValue = "ascending-name";
  const defaultEmptySearchAlert = false;
  const defaultSugestedSearch ="spore frog";

  const [cardList, setCardList] = useState(defaultCardlistState);
  const [searchPlaceholder, setSearchPlaceholder] = useState(defaultSearchPlaceholder);
  const [sortSelectValue, setSortSelectValue] = useState(defaultSortSelectValue);
  const [emptySearchAlert, setEmptySearchAlert] = useState(defaultEmptySearchAlert);
  const [sugestedSearch, setSugestedSearch] = useState(defaultSugestedSearch);


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
              setEmptySearchAlert(true);
              setCardList(null);
              const suggestion = getSuggestionQuery(q);
            } else {
              setEmptySearchAlert(false);
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
      <NavigationBar handleSubmit={handleSubmit} searchPlaceholder={searchPlaceholder}/>
      {cardList && <ActionBar handleSortSelectChange={handleSortSelectChange} sortSelectValue={sortSelectValue}/>}
      {emptySearchAlert && <EmptySearchAlert suggestion = {sugestedSearch}/>}
      <SearchArea cardList={cardList}/>
    </React.Fragment>
  );
}


function EmptySearchAlert({suggestion}){

  // Eventually this should be        
  // <div> No cards found. Did you mean: {suggestion}? </div>

  return(
    <div name="alert-container" 
      className="       
      bg-red-300 text-red-950 
      w-screen h-[2rem] p-1">
      <div name="not-found-alert " > No cards found for your search, please try again</div>
    </div>
    
  )
}

// cant be via api
function getSuggestionQuery(query){
  return ("Spore Frog");
}