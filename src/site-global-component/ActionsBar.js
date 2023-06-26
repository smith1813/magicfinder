import React from "react";

//todo: sort para cartas por cmc
//dropdown para opciones de filtrado



export default function ActionBar({handleSortSelectChange, sortSelectValue}){

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
                <option value="ascending-cmc">Converted Mana Cost (asc)</option>
                <option value="descending-cmc">Converted Mana Cost (desc)</option>            
                <option value="ascending-released_at">Release Date (asc)</option>
                <option value="descending-released_at">Release Date (desc)</option>
                <option value="ascending-name">Name (asc)</option>
                <option value="descending-name">Name (desc)</option>
                <option value="ascending-type_line">Type (asc)</option>
                <option value="descending-type_line">Type (desc)</option>
                <option value="ascending-set_name">Set (asc)</option>
                <option value="descending-set_name">Set (desc)</option>
            </select>            
        </div>
    )
}