import React from 'react';
import { useParams } from 'react-router-dom';
import boysClothesData from './../data/boys/Cloths';
import boysRaincoatData from './../data/boys/RainCoats';
import boysFootwearData from './../data/boys/Shoes';
import boysUmbrellaData from './../data/boys/Umbrella';
import girlsClothesData from './../data/girls/Cloths';
import girlsRaincoatData from './../data/girls/RainCoats';
import girlsFootwearData from './../data/girls/Shoes';
import MyProducts from './../../components/ProductCard/ProductCard';

function BlogProductCard() {
  const { gender, category } = useParams(); 
  

  console.log("Gender:", gender);
  console.log("Category:", category);

  let productData = [];

  if (gender === 'boys') {
    if (category === 'clothes') {
      productData = boysClothesData;
    } else if (category === 'raincoat') {
      productData = boysRaincoatData;
    } else if (category === 'footwear') {
      productData = boysFootwearData;
    } else if (category === 'umbrella') {
      productData = boysUmbrellaData;
    }
  } else if (gender === 'girls') {
    if (category === 'clothes') {
      productData = girlsClothesData;
    } else if (category === 'raincoat') {
      productData = girlsRaincoatData;
    } else if (category === 'footwear') {
      productData = girlsFootwearData;
    }
  }

  return (
    <div className="container">
      {productData.map((item, i) => (
        <MyProducts
          key={i}
          id={item.id}
          content={item.content}
          productsimgs={item.productsimgs}
          date={item.date}
          Price={item.Price}
          Offer={item.Offer}
          Technology={item.Technology}
        />
      ))}
    </div>
  );
}

export default BlogProductCard;