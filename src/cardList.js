import React from "react";
import { parseManaCost } from "./utils";
import { ReactSVG } from "react";



export function CardList({cardList}){
    return(
        <div name="card-list-container" className="flex flex-wrap justify-center">
                {cardList.map( c => 
                    <div key={"cl" + c.id}>
                        <Card key={'li'+c.id} className=""  cardInfo={c} />
                    </div>
                )}
        </div>
    );
}


function Card({cardInfo}){

    // pueden existir cartas de doble cara, esas no traen img_uri,
    // en vez de eso tienen un objeto llamada "card_faces", que trae las URIs adentro
    let cardImages =[];
    const hasMultipleFaces = cardInfo.hasOwnProperty('card_faces');

    if(hasMultipleFaces){
        try{
            cardInfo.card_faces.map( c => {
                cardImages.push(c.image_uris.small);
            });           
        } catch (error){
            try {
                cardImages.push(cardInfo.image_uris.small);
            } catch (error) {
                console.log("error en el push");
                console.log(cardInfo)    
            }
        }
    
    } else {
        cardImages.push(cardInfo.image_uris.small);
    }

    const manaCostURIs = parseManaCost(cardInfo);
    //console.log(manaCostURIs)
    let i = 0;
    return(
        <div name="card-container" className="transform transition duration-500 hover:scale-110 p-2 m-5 bg-white border-black rounded-3xl border-2 shadow-lg shadow-black">
            <div name="card_details" className="m-5 flex-col content-start"  key={"cd_"+cardInfo.id}>

                <div name="card-header-container" className=" h-5">
                    <ManaCost manaCostURIs={manaCostURIs} />
                </div>
                <div className="text-center font-semibold  ">{cardInfo.name}</div>
                <div name="card_images" className="flex justify-center">
                    { cardImages.map( ci => <img key={"card_face_"+ i++} src={ci} alt={cardInfo.name}/>)}
                </div>
                <div name="card-price" className="text-center"><p>{cardInfo.prices.usd ? "USD$"+cardInfo.prices.usd : "N/A"}</p></div>
            </div>
        </div>
    );
}

function ManaCost({manaCostURIs}){
    try{
        return(
            <div name="mana-cost-container" className="flex h-full justify-end">
                {  manaCostURIs.map(uri =>{ return(<img key="" className="w-auto h-auto" src={uri}/>)}) }
            </div>
        )

    } catch (error) {
        console.log("error en la uri para " + manaCostURIs)
        return null;
    }

}