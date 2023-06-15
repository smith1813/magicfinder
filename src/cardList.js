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
    return(
        <div className="card_details" key={"cd_"+cardInfo.id}>
            <h1>{cardInfo.name}</h1>
            <img src={cardInfo.image_uris.normal}/>
        </div>
    );
}