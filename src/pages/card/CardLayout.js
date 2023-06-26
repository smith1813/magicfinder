import React from 'react'
// this should care about both faces of the card and return them on both cases
export default function CardLayout({ cardInfo }) {

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
    return (<img className="card-image" src={require('../../images/empty.png')} />)

}

function CardSingleFaced({ uri }) {
    return (
        <div className="single-card-container">
            <CardImage uri={uri} />
        </div>
    )
}


function CardDoubleFaced({ cardInfo }) {

    //id should be unique though
    const frontFaceId = cardInfo.id + "-front";
    const backFaceId = cardInfo.id + "-back";
    function handleClick() {
        try {
            const front = document.getElementById(frontFaceId)
            const back = document.getElementById(backFaceId)
            front.classList.toggle('flipped')
            back.classList.toggle('flipped')
        } catch (error) {
            console.log('error al flipear carta');
            console.log(cardInfo);
            console.log(error);
        }
    }

    if (cardInfo.card_faces) {
        const uri_front = cardInfo.card_faces[0].image_uris.normal;
        const uri_back = cardInfo.card_faces[1].image_uris.normal;

        return (
            <React.Fragment>
                <div className="double-card-container">
                    <div className="dual-faced-card">
                        <img className="flip-button" onClick={handleClick} src={require('../../images/flip-icon.png')}></img>
                        <div id={frontFaceId} className="cardFront"><CardImage uri={uri_front} /></div>
                        <div id={backFaceId} className="cardBack"><CardImage uri={uri_back} /></div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
    return (<CardImage uri={null} />)

}
