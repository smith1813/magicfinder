import { useState } from "react";
import React from "react";
import SearchPage from "./searchPage"

export default function App() {

  const [cardList, setCardList] = useState(null);
  const [searchState, setSearchState] = useState("");

    function handleCardList(e){
          setCardList(e);
    }

    function fetchAPI(e){
      let q= e;
      //cada vez que se renderea la pagina se fetchea de nuevo
      //como saco esto de la pagina?
      fetch(encodeURI('https://api.scryfall.com/cards/search?q='+q))
        .then( res =>  {
          console.log(res);
          return res.json()})
          .then(j => 
            handleCardList(j.data))
      .catch( error => alert(error));
    }

    function handleSubmit(e){
      e.preventDefault();
      const searchQueue = e.target.search_queue.value;
      fetchAPI(searchQueue);
    }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
          <input name="search_queue" placeholder="Search card name" />
         <button type="submit">Submit</button>
        </form>
      <SearchPage cardList={cardList}/>
    </React.Fragment>
  );
}
