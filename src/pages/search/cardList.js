import React from "react";
import Card from "./card";



export function CardList({cardList}){
    return(
        <div className="">
            <div name="card-list-container" 
                className=" 
                    bg-slate-200 w-full h-full
                    flex flex-wrap justify-center">
                    {cardList.map( c => 
                        <div key={"cl" + c.id}>
                            <Card key={'li'+c.id} cardInfo={c} />
                        </div>
                    )}
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