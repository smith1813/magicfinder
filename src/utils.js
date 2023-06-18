import { symbolData } from "./resources/symbology";

export function sortCards( cardList , propertyName , order = 'ascending' ){
    const sortedArr = cardList.sort((a, b) => {
        if (a[propertyName] < b[propertyName]) {
          return -1;
        }
        if (a[propertyName] > b[propertyName]) {
          return 1;
        }
        return 0;
      });
    
      if (order === 'descending') {
        return sortedArr.reverse();
      }  
      return sortedArr;
};

export function parseManaCost(cardInfo){
    if (cardInfo === null) return ("No card given"); //this should be an exception
    if (cardInfo.mana_cost === null) return ("key 'mana_cost' doesn't exist"); //this should be an exception
    if (cardInfo.mana_cost === "") return ("Card has no manacost");
    // pase mana cost
    const manaCost = cardInfo.mana_cost;
    //get array with the mana symbols
    return manaCostExtract(manaCost);
}

// **WORKING**
// todo: make it with regex
function manaCostExtract(manaCost){
    let symbols;
    let parsedManaCost = [];
    try{
        symbols = manaCost.substring(1,manaCost.length-1).split('}{');
        symbols.map( c => parsedManaCost.push("{"+c+"}"));
        const uris = arrayManaCostToURIs(parsedManaCost);
        return uris;
    } catch (error) {
        console.log("Could not extract the mana cost");
        return null;
    }
}

function arrayManaCostToURIs(parsedManaCost){

    const symbols = symbolData.slice();
    let uris = []; //return an array of urs for the mana values
    
    let filteredSymbols;
    parsedManaCost.map( mc => {
        filteredSymbols = symbols.filter(sym => sym.symbol === mc)
        filteredSymbols.map( f => uris.push(f.svg_uri))       
    })
//return an array of images to the symbols, you can put them in a flex to show them in line
return uris;
}