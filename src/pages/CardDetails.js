import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function CardDetails() {

    const params = useParams();
    const cardId = params.cardId;
    const [cardInfo, setCardInfo] = useState(null);

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
            {cardInfo && <CardDetailsLayout cardInfo={cardInfo} />}
        </React.Fragment>
    )
}

function CardDetailsLayout({ cardInfo }) {

    // here it stops the fli-card nonsense 
    return (
        <div name="card-details-container" className="h-screen w-screen flex flex-col justify-center p-5">

            <div name="card-container" className="card-container">
                <CardLayout cardInfo={cardInfo} />
            </div>

        </div>
    )
}

// this should care about both faces of the card and return them on both cases
function CardLayout({ cardInfo }) {

    if (cardInfo.image_uris) {
        const uri = cardInfo.image_uris.normal
        return <CardSingleFaced uri={uri} />
    }

    if (cardInfo.card_faces)
        return <CardDoubleFaced cardInfo={cardInfo} />

    return <CardSingleFaced uri={null} />
}

function CardImage({ uri }) {

    if (uri) {
        return (<img className="card-image" src={uri} />)
    }
    return (<img className="card-image" src={require('../images/empty.png')} />)

}

function CardSingleFaced({ uri }) {
    return (
        <div className="single-card-container">
            <CardImage uri={uri} />
        </div>
    )
}


function CardDoubleFaced({ cardInfo }) {


    //no funciona si no hay click, poner cada carta dentro de un div porque no acepta la clase el componente
    const front = document.getElementById('front')
    const back = document.getElementById('back')
    function handleClick() {
        try {
            front.classList.toggle('flipped')
            back.classList.toggle('flipped')
        } catch {
            console.log('error al flipear carta');
            console.log(cardInfo);
        }
    }

    if (cardInfo.card_faces) {
        const uri_front = cardInfo.card_faces[0].image_uris.normal;
        const uri_back = cardInfo.card_faces[1].image_uris.normal;

        //this should be PURE (yo asshole)
        return (
            <React.Fragment>
                <div className="double-card-container">
                    <div className="dual-faced-card">
                        <img className="flip-button" onClick={handleClick} src={require('../images/flip-icon.png')}></img>
                        <div id="front" className="cardFront"><CardImage uri={uri_front} /></div>
                        <div id="back" className="cardBack"><CardImage uri={uri_back} /></div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
    return (<CardImage uri={null} />)

}


/*<button
id="flip-button"
className="
p-2 h-10 w-1/5 min-w-[80px] 
hover:bg-blue-400 bg-blue-800 text-slate-200 rounded-xl
absolute
top-1/3 left-1/2
"
onClick={handleClick}>Flip!
</button>*/