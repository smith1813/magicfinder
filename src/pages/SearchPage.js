import { useState } from "react";
import React from "react";
import SearchArea from "../display/searchArea"
import ActionBar from "../layout/actionsBar";
import NavigationBar from "../layout/navBar";
import { sortCards } from "../utils";
import { useParams, useSearchParams } from "react-router-dom";



export default function SearchPage() {

  // Search params for the query!
  //const [searchParams, setSearchParams] = useSearchParams();
  //const searchQuery = searchParams.get('q');
  
  

  const defaultCardlistState = null;
  const defaultSearchPlaceholder = "search card's name";
  const defaultSortSelectValue = "ascending-name";
  const defaultEmptySearchAlert = false;
  const defaultSugestedSearch = "spore frog";

  const [cardList, setCardList] = useState(defaultCardlistState);
  const [sortSelectValue, setSortSelectValue] = useState(defaultSortSelectValue);
  const [emptySearchAlert, setEmptySearchAlert] = useState(defaultEmptySearchAlert);
  const [sugestedSearch, setSugestedSearch] = useState(defaultSugestedSearch);


  //TODO: Make more expresive api logic



  // en cada llamada a la API, 
  // entonces siempre se triggerea el setCardList porque se setea a objetos distintos 
  // con el mismo valor, lo que hace que sean en efecto, distintas referencias
  function fetchAPI(e) {

    //On API consumption, reset the sort filter state and the placeholder state
    setSortSelectValue(defaultSortSelectValue);
    let q = e;
    fetch(encodeURI('https://api.scryfall.com/cards/search?q=' + q))
      .then(res => {
        return res.json()
      })
      .then(j => {
        //si viene un j.status === 404, hacer algo
        if (j.status === 404) {
          console.log("llego un error 404 por la API");
          setEmptySearchAlert(true);
          setCardList(null);
        } else {
          setEmptySearchAlert(false);
          handleCardList(j.data)
        }
      }
      )
      .catch(error => alert(error));
  }

  //  maybe i can get rid of this
  function handleCardList(e) {
    setCardList(e);
  }

  //maybe submitting should just redirect to search?q={e.target.search_queue.value} ??
  function handleSubmit(e) {
    e.preventDefault();
    const searchQueue = e.target.search_queue.value;
    fetchAPI(searchQueue);
  }

  function handleSortSelectChange(e) {
    if (cardList === null) return;
    const sortValue = e.target.value;
    const [order, key] = sortValue.split('-', 2);
    let orderedCardList = cardList.slice();
    orderedCardList = sortCards(orderedCardList, key, order);
    setSortSelectValue(order + "-" + key);
    setCardList(orderedCardList);
  }




  return (
    <React.Fragment>
      <NavigationBar handleSubmit={handleSubmit} searchPlaceholder={defaultSearchPlaceholder} />
      {cardList && <ActionBar handleSortSelectChange={handleSortSelectChange} sortSelectValue={sortSelectValue} />}
      {emptySearchAlert && <EmptySearchAlert suggestion={sugestedSearch} />}
      <SearchArea cardList={cardList} />
    </React.Fragment>
  );
}




function EmptySearchAlert({ suggestion }) {

  // Eventually this should be        
  // <div> No cards found. Did you mean: {suggestion}? </div>

  return (
    <div name="alert-container"
      className="       
      bg-red-300 text-red-950 
      w-screen h-[2rem] p-1">
      <div name="not-found-alert " > No cards found for your search, please try again</div>
    </div>

  )
}

// cant be via api i have to code it myself from the catalog
//function getSuggestionQuery(query) {
//  return ("Spore Frog");
//}


function SearchResults(){
  
}