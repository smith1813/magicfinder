import React from "react";

export default function DetailsLayout({ cardInfo }) {

    if (!cardInfo) return null;

    // card text has to check if there are multiple faces
    return (
        <div name="details-container" className="details-container">
            <CardName name={cardInfo.name} />
            <CardType typeLine={cardInfo.type_line} />
            <CardText cardInfo={cardInfo} />
            <Artist artist={cardInfo.artist} />
            <Legalities legalities={cardInfo.legalities} />
        </div>
    )
}

function CardName({ name }) {
    if (!name) return null;
    return (<div name="card-name" className="details-section">{name}</div>)
}

function CardType({ typeLine }) {
    if (!typeLine) return null;
    return (<div name="card-type" className="details-section">{"Type: " + typeLine}</div>)
}

function CardText({ cardInfo }) {
    //check all the faces and put them one on top of each other
    if (!cardInfo) return null;
    let oracleText = [];
    if (cardInfo.card_faces) {
        cardInfo.card_faces.map(face => oracleText.push(face.oracle_text))
    } else {
        oracleText.push(cardInfo.oracle_text)
    }
    console.log(oracleText);

    return (
        <div name="card-text" className="details-section">
            <ul>
                {oracleText.map((faceText, index) => <li id={"rule_face_"+index} className="border-dashed border-b-4 last:border-0">{faceText}</li>)}
            </ul>
        </div>
    )
}

function Artist({ artist }) {
    if (!artist) return null;
    return (<div name="card-artist" className="details-section">{"Illustrated by " + artist}</div>)
}

function Legalities({ legalities }) {
    if (!legalities) return null;
    const entries = Object.entries(legalities);

    const twCommon = "h-full p-2 rounded-xl mr-auto text-xs w-[100px] text-center font-bold  text-white"
    const twLegalities = {
        'not_legal': 'bg-slate-400 text-slate-200' + twCommon,
        'banned': 'bg-red-400 text-red-800' + twCommon,
        'legal': 'bg-green-400 text-white' + twCommon,
        'restricted': 'bg-blue-400 text-black' + twCommon
    }
    return (
        <div name="card-legalities" className="details-section-end">
            <ul className="grid grid-cols-4 gap-y-1 gap-x-1 text-left bg-blu ">
                {entries.map(l =>
                    <React.Fragment>
                        <li className={twLegalities[l[1]]}>{l[1].replace('_', ' ').toUpperCase()}</li>
                        <li className="mr-auto font-bold text-sm">{l[0]}</li>
                    </React.Fragment>

                )}
            </ul>
        </div>)
}
