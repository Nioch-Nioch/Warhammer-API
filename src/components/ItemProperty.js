import React from 'react';
import logo from './Komet.png'
import LoadingIndicator from './LoadingIndicator'
import Sprite from './Sprite';

const ItemProperty = ({newItemName, newItemPrice, newItemRest, errorProperties, isLoadingProperties, newItemProperties}) => {

    let penny = 0;
    let gold = 0;
    let silver = 0;
    if(newItemPrice % 12 === 0){
        silver= newItemPrice/12
    } else {
        penny = newItemPrice % 12
        silver = Math.floor(newItemPrice/12)
    }
    if(silver % 20 === 0){
        gold = silver / 20
        silver = 0
    } else { 
        gold = Math.floor(silver/20)
        silver = silver % 20
    }

    return ( 
        <div className="box-for-item">
            <div className ="box-for-item__image"><img src={logo} height="100%" width="100%" alt="Just decoration" key={[]}></img></div>
            <div className="box-for-item__property">
                <span className='property-of-item-t1'>Nazwa: {newItemName}</span> 
                <span className='property-of-item-t1'>Cena: {gold}<Sprite srcForCoin={'gold'}/>  {silver}<Sprite srcForCoin={'silver'}/>  {penny}<Sprite srcForCoin={'bronze'}/></span> 
                <span className='property-of-item-t1'>Info:  {newItemRest}</span>
                 
            </div>
            <div className="box-for-item_image__value" >
                { errorProperties && <div>{ errorProperties }</div>}
                { isLoadingProperties && <LoadingIndicator /> }
                {newItemProperties && newItemProperties.map(items => 
                    (<div key={items.name}>
                        <a> {items.name} </a> 
                        <br></br> 
                        <p className="Paragraph"> {items.info} </p> 
                    </div>))}
            </div>
        </div>
     );
}

 
export default ItemProperty;