import { useState, useEffect} from "react";
import React from "react";
import SearchArea from "./searchArea"
import ActionBar from "../../site-global-component/ActionsBar";
import SearchBar from "../../site-global-component/SearchBar";
import { sortCards } from "../../lib/utils";
import { useParams, useSearchParams } from "react-router-dom";



export default function SearchPage() {
  //default constants
  const defaultPlaceholder = "Search card's name";

  // States and params
  const [searchParams, setSearchParams] = useSearchParams();
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder)
  const searchQuery = searchParams.get('q');


  function handleSubmit(e) {
    e.preventDefault();
    const q = e.target.search_query.value
    setSearchParams({ 'q': q });
    setPlaceholder(q);
  }

  console.log(searchParams);
  console.log(searchQuery);


  return (
    <React.Fragment>
      <SearchBar handleSubmit={handleSubmit} searchPlaceholder={placeholder} />
      <SearchResults searchQuery={searchQuery} />
    </React.Fragment>
  );
}

function EmptySearchAlert() {
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


function SearchResults({ searchQuery }) {

  if (!searchQuery) {
    return null;
  }
  const defaultCardlistState = null;
  const defaultSortSelectValue = "ascending-name";
  const defaultEmptySearchAlert = false;

  const [cardList, setCardList] = useState(defaultCardlistState);
  const [sortSelectValue, setSortSelectValue] = useState(defaultSortSelectValue);
  const [emptySearchAlert, setEmptySearchAlert] = useState(defaultEmptySearchAlert);


  // Call the api when the searchQuery changes
  useEffect(() => {
    fetch(encodeURI('https://api.scryfall.com/cards/search?q=' + searchQuery))
    .then(res => res.json())
    .then(j => {
      if(j.status === 404){
        setEmptySearchAlert(true);
        setCardList(null);
      }else {
        handleCardList(j.data)}
      })
    .catch(error => alert(error))
  },[searchQuery])


  function handleCardList(e) {
    setEmptySearchAlert(false);
    setCardList(e);
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
      {cardList && <ActionBar handleSortSelectChange={handleSortSelectChange} sortSelectValue={sortSelectValue} />}
      {emptySearchAlert && <EmptySearchAlert />}
      {<SearchArea cardList={cardList} />}
    </React.Fragment>
  );
}
