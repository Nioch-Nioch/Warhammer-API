import React, { useState } from 'react';

import CategoryList from "./CategoryList";
import ItemsList from "./ItemsList";
import ItemProperty from "./ItemProperty";

import useFetch from '../useFetch';
import filtering from '../filtering'

const Shop = () => {
    
    const { dataOfFatch: categoryList, isLoadingCategory, errorCategory} = useFetch('http://localhost:3001/categories'); 
    const { dataOfFatch: itemsListState, isLoadingItems, errorItems} = useFetch('http://localhost:3001/items'); 
    const { dataOfFatch: propertiesListState, isLoadingProperties, errorProperties} = useFetch('http://localhost:3001/propertiesOfItems'); 
    
    const [newItemsList, setNewItemsList] = useState([]);
    const [newItem, setNewItem] = useState('1');
    const [newItemProperties, setNewItemProperties] = useState(propertiesListState)

    const getCategory = (id = 1) => {
        const newItemsList = filtering(itemsListState, "categoryId", id);     
        setNewItemsList(newItemsList)
    }
    const getItem = (id, propertiesId) => {
        const newProperties = filtering(propertiesListState, "id", propertiesId); 
        const newItems = filtering(itemsListState, "id", id);     
        setNewItem(newItems);
        setNewItemProperties(newProperties);
    }
    
    return ( 
        <div className="shop">
            <CategoryList categoryList={categoryList} isLoadingCategory={isLoadingCategory} errorCategory={errorCategory} onCategoryClicked={getCategory}/>
            <ItemsList itemsList={newItemsList} isLoadingItems={isLoadingItems} errorItems={errorItems} onItemClicked={getItem}/>
            <ItemProperty newItemName={newItem[0].name}  newItemPrice={newItem[0].price} newItemRest={newItem[0].rest} isLoadingProperties={isLoadingProperties} errorProperties={errorProperties} newItemProperties={newItemProperties}/>
        </div>
    );
    
}

export default Shop;