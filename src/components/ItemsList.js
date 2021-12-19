import React from 'react';
import LoadingIndicator from './LoadingIndicator';


const ItemsList = ({ itemsList,  isLoadingItems, errorItems, onItemClicked }) => {  
    //
    return ( 
        <ul className="category-list">
            { errorItems && <div>{ errorItems }</div>}
            { isLoadingItems && <LoadingIndicator /> }
            { itemsList && itemsList.map((items) => (<li key={ items.id } onClick={() => onItemClicked(items.id, items.propertiesId)}> { items.name }</li>))} 

        </ul>
    );
}

 
export default ItemsList;