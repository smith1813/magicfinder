import React from "react";
import { parseManaCost } from "../../lib/utils";
import { ReactSVG } from "react";
import { redirect, useNavigate } from "react-router-dom";

export default function Card({cardInfo}){

    //by clicking on the card you can go to the card details page
    const navigate = useNavigate();

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
        <div name="card-container" 
            className="
                transform transition duration-200 hover:scale-110 
                bg-slate-100 border-black 
                rounded-xl border-1 m-2 shadow-sm shadow-black
                max-w-md max-h-[18rem]"
            onClick={ () => navigate('/card/'+cardInfo.id)}
                >
            
            <div 
                name="card_details" 
                className=" m-2 "  
                key={"cd_"+cardInfo.id}>
                <div 
                    name="card-name"
                    className="m-auto truncate max-w-[10rem] text-center font-semibold">
                        {cardInfo.name}
                </div>
                
                <div name="card_images" className="flex justify-center">
                    { cardImages.map( ci => <img key={"card_face_"+ i++} src={ci} alt={cardInfo.name}/>)}
                </div>
                <div name="card-price" className="text-center"><p>{cardInfo.prices.usd ? "USD$"+cardInfo.prices.usd : "N/A"}</p></div>
            </div>
        </div>
    );
}