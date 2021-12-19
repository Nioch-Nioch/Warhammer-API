import React from 'react';
import PropTypes from 'prop-types'

import LoadingIndicator from './LoadingIndicator';


const CategoryList = ({categoryList, isLoadingCategory, onCategoryClicked}, props  ) => {
   
    return ( 
        <ul className="category-list">
            { props.errorCategory && <div>{ props.errorCategory }</div>}
            { isLoadingCategory && <LoadingIndicator /> }
            { categoryList && categoryList.map((items) => (
                <li key={ items.id } onClick={() => onCategoryClicked(items.id)} >{ items.name }</li>
            ))} 
        </ul>
     );
}

// I use PropTypes only in this component just for show my skills. In this project i don't need this funcionality
CategoryList.propTypes = {
    onCategoryClicked: PropTypes.func.isRequired,
    isLoadingCategory: PropTypes.bool,
    categoryList: PropTypes.array.isRequired
};


export default CategoryList;