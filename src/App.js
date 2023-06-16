import { useState } from "react";
import React from "react";
import SearchPage from "./searchPage"

export default function App() {

  const [cardList, setCardList] = useState(null);
  const [searchPlaceholder, setSearchPlaceholder] = useState("");


    function handleCardList(e){
          setCardList(e);
    }

    function fetchAPI(e){
      let q= e;
      //cada vez que se renderea la pagina se fetchea de nuevo
      //como saco esto de la pagina?
//      fetch(encodeURI('https://api.scryfall.com/cards/search?q='+q))
      fetch(encodeURI('https://api.scryfall.com/cards/search?q='+q))
          .then( res =>  {
          return res.json()})
          .then(j => 
            handleCardList(j.data))
      .catch( error => alert(error));
    }

    function handleSubmit(e){
      e.preventDefault();
      const searchQueue = e.target.search_queue.value;
      setSearchPlaceholder(searchQueue);
      fetchAPI(searchQueue);
    }

  return (
    <React.Fragment>
      <div name="all-container" className='bg-slate-400 h-20'>
        <div name="form-container" className="flex bg-slate-800 justify-center items-center py-10">
          <form name="search-form"  onSubmit={handleSubmit}>
              <input className=" bg-slate-300 hover:bg-slate-200 border-1 border-slate-400 rounded-xl  rounded-r-none p-1 px-3 text-black " name="search_queue" placeholder={searchPlaceholder} />
              <button className="bg-slate-900  hover:bg-blue-400 border-1  border-slate-400 rounded-xl rounded-l-none p-1 px-3 text-slate-300 text-center" type="submit">Search</button>
          </form>
          
        </div>
        <div name="search-result" className="flex justify-center">
          <SearchPage cardList={cardList}/>
        </div>
      </div>
    </React.Fragment>
  );
}
