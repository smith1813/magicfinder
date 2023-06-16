import React from "react";


export function CardList({cardList}){

    return(
        <div name="card-list-container" className="flex">
            <ol className="self-center">
                {cardList.map( c => 
                    <div key={"cl" + c.id}>
                        <li key={'li'+c.id} >
                        <Card classname="card" cardInfo={c} />
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
        <div name="card-container" className="p-2 m-5 border-black rounded-3xl border-2">
            <div className="m-5 content-center" name="card_details" key={"cd_"+cardInfo.id}>
                <h3 className="text-center">{cardInfo.name}</h3>
                <div name="card_images" className="flex justify-center">
                    { cardImages.map( ci => <img key={"card_face_"+ i++} src={ci} alt={cardInfo.name}/>)}
                </div>
                <div name="card-price" className="text-center"><p>{"USD$"+cardInfo.prices.usd}</p></div>
            </div>
        </div>
    );
}