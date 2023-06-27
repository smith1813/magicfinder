import React from "react";
import {useState, useEffect} from "react"; 
import { useNavigate } from "react-router-dom";


export default function LandingPage() {

    const [randomId, setRandomId] = useState(null);

    const navigate = useNavigate();

    function handleRandomClick(e){
        navigate('/card/'+randomId);
    }

    useEffect(() => {
        fetch(encodeURI('https://api.scryfall.com/cards/random'))
        .then(res => res.json())
        .then(j => {
          if(j.status === 404){
            console.log('404 error on random card api fetch')
          }else {
            //redirect
            setRandomId(j.id)
            console.log(randomId)
            }
          })
        .catch(error => alert(error))
      },[])

    return (
        <React.Fragment>
            <div name="landingpage-background"
                className="flex w-full h-screen bg-slate-800 justify-center flex-col">

                <div name="instructions-wrapper" className="mb-[25%]">
                    <div className="w-full flex flex-col justify-center text-slate-200" >
                        <div className="mb-1  m-auto px-10 text-center text-2xl   " >
                            <p>Please, search for a <strong className="whitespace-nowrap">Magic: the Gathering</strong>  card name</p>
                        </div>
                        <div className="mb-10  m-auto px-10 text-center text-sm   " >
                            <p>(You can try names like "Lotus", "Elf", "Demon" or "Frog" if you are out of ideas)</p>
                        </div>
                    </div>
                    <form action="/search" name="search-form" className="m-auto flex flex-row w-2/3"  >
                        <input name="q"
                            className="
                            bg-slate-300 hover:bg-slate-200 
                            border-1 border-slate-400 rounded-xl  
                            rounded-r-none p-1 px-3 text-black h-14 w-full
                            font-semibold text-xl"

                            placeholder={'search a card name'} />
                        <button
                            className="bg-slate-900  hover:bg-slate-600 border-1  border-slate-400 
                        rounded-xl rounded-l-none p-1 px-3 text-slate-300 text-center object
                        h-14 w-20"
                            type="submit">
                            <img className="max-w-12 max-h-12 " src={require('../../images/SearchLogo.png')}></img>
                        </button>
                    </form>
                    <div name="random-button" className="flex flex-col justify-center mt-20">
                        <button onClick={handleRandomClick} className=" text-slate-200 hover:bg-slate-600 m-auto p-4 bg-slate-900 border-slate-600 border-2 font-semibold ">Or, try a random card!</button>
                    </div>
                </div>
            </div>
        </React.Fragment>)
}