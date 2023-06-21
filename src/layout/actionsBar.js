import React from "react";

//todo: sort para cartas por cmc
//dropdown para opciones de filtrado



export default function ActionBar({actionBarState, handleSortSelectChange,sortSelectValue}){

    return(
        <div name="action-bar-container" className="bg-slate-400 p-2 flex justify-left">
            <SortSelect  handleSortSelectChange={handleSortSelectChange} sortSelectValue={sortSelectValue}/>
        </div>
    )
}

function SortSelect({handleSortSelectChange, sortSelectValue}){
    return(
        <div name="sort-container"className="flex">
            <div name="sort-text" className="pr-1 mr-2">
            Sorted by:
            </div>
            <select name="sort-select" onChange={handleSortSelectChange} value={sortSelectValue}
                className="bg-slate-300 hover:bg-slate-200 p-1 pl-1 rounded-lg" >
                <option value="ascending-cmc">Converted Mana Cost (ascending)</option>
                <option value="descending-cmc">Converted Mana Cost (descending)</option>            
                <option value="ascending-released_at">Release Date (ascending)</option>
                <option value="descending-released_at">Release Date (descending)</option>
                <option value="ascending-name">Name (ascending)</option>
                <option value="descending-name">Name (descending)</option>
                <option value="ascending-type_line">Type (ascending)</option>
                <option value="descending-type_line">Type (descending)</option>
                <option value="ascending-set_name">Set (ascending)</option>
                <option value="descending-set_name">Set (descending)</option>


            </select>            
        </div>
    )
}