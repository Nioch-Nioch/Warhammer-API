// It is my filtering data from fech but this filtering is exactly for my database.
// In filtering:
// - I check which category user chose 
// - And exactyl which item user want to see 

 const filtering = (payload, key, value) => {    
    let filtered = [];
    if(typeof value !== "object" ){
        payload.forEach(item => {
            if ( item[key] && item[key] === value ) {
                filtered.push(item);
            }})
    } else { 
        value.forEach(values => {
            payload.forEach(item => {
                if ( item[key] && item[key] === values ) {
                    filtered.push(item);
                }}                
            
    )})}
    return filtered 
    }

export default filtering;