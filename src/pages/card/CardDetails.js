import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SearchBar from "../../site-global-component/SearchBar"
import { useNavigate } from "react-router-dom";
import CardLayout from "./CardLayout";
import DetailsLayout from "./DetailsLayout";

export default function CardDetails() {

    const params = useParams();
    const cardId = params.cardId;
    const placeholder = "Search card's name";
    const [cardInfo, setCardInfo] = useState(null);
    const navigate = useNavigate();

    
    function handleSubmit(e){
        e.preventDefault();
        const search_query = e.target.search_query.value;
        navigate('/search?q='+search_query)
    }


    // Call the api when the searchQuery changes
    useEffect(() => {
        fetch(encodeURI('https://api.scryfall.com/cards/' + cardId))
            .then(res => res.json())
            .then(j => {
                if (j.status === 404) {
                    console.log('404 en la consulta por el ID')
                    //redirect to 404 maybe
                } else {
                    setCardInfo(j);
                }
            })
            .catch(error => alert(error))
    }, [cardId])


    return (
        <React.Fragment>
            <SearchBar handleSubmit={handleSubmit} searchPlaceholder={placeholder} />
            {cardInfo && <CardDetailsLayout cardInfo={cardInfo} />}
        </React.Fragment>
    )
}

function CardDetailsLayout({ cardInfo }) {

    // here it stops the fli-card nonsense 
    return (
        <React.Fragment>
            <div name="card-details-container" className="flex m-5 flex-wrap justify-center ">

                <div name="card-container" className="card-container">
                    <CardLayout cardInfo={cardInfo} />
                </div>
                <div name="details-container" className="details-layout-container">
                    <DetailsLayout cardInfo={cardInfo}/>
                </div>

            </div>
        </React.Fragment>

    )
}
