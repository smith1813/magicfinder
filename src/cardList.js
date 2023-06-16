import React from "react";


export function CardList({cardList}){

    return(
        <div className="cardList">
            <ol>
                {cardList.map( c => 
                    <div key={"cl" + c.id}>
                        <li key={'li'+c.id} >
                        <Card cardInfo={c} />
                        </li>
                    </div>
                )}
            </ol>
        </div>
    );
}

function Card({cardInfo}){

    // pueden existir cartas de doble cara, esas no traen img_uri,
    // en vez de eso tienen un objeto llamada "card_faces", que trae las URIs adentro
    let cardImages =[];
    const hasMultipleFaces = cardInfo.hasOwnProperty('card_faces');
    
    if(hasMultipleFaces){
        cardInfo.card_faces.map( c => {
            cardImages.push(c.image_uris.small);
        });
    } else {
        cardImages.push(cardInfo.image_uris.small);
    }
    let i = 0;
    return(
        <div className="card_details" key={"cd_"+cardInfo.id}>
            <h1>{cardInfo.name}</h1>
            { cardImages.map( ci => <img key={"card_face_"+ i++} src={ci} alt={cardInfo.name}/>)}
        </div>
    );
}