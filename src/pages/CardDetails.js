import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function CardDetails(){

    const [searchParams, setSearchParams] = useSearchParams()
    const message = searchParams.get('message');
    if( message ){
        console.log(message);
    }   
    const { cardId } = useParams();
    return (
        <React.Fragment>
            <p>Card {cardId} Details!</p>
            { message && <p className="bg-red-500 text-xl m-auto min-h-3">{message}</p>}
        </React.Fragment>
    )
}