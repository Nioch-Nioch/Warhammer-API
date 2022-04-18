import React from 'react';
import { useSprite } from 'react-sprite-animator';
import gold from '../assets/coins/gold.png';
import bronze from '../assets/coins/bronze.png';
import silver from '../assets/coins/silver.png';

// I use react-sprite-animator to make that coins movement u can read more info: https://www.npmjs.com/package/react-sprite-animator

const Sprite = ({srcForCoin}) => {
    let srcToCoin;
    if(srcForCoin=== 'gold'){
        srcToCoin = gold;
    } else if(srcForCoin === 'silver'){
        srcToCoin = silver;
    } else {
        srcToCoin = bronze;
    }

  const styles = useSprite({
    sprite: srcToCoin,
    width:20,
    height: 20,
    shouldAnimate:true,
    fps:20,
    startFrame:0,
    stopLastFrame:false,
  })

  return (
    <div style={styles}></div>
  )
}
export default Sprite;
