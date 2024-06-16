import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard({ gender, category }) {
  const getImageUrl = (gender, category) => {
    if (gender === 'boys') {
      switch (category.toLowerCase()) {
        case 'footwear':
          return 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/16345271a.webp';
        case 'clothes':
          return 'https://cdn.fcglcdn.com/brainbees/images/m/fashionstore/45-Romp-Walk.jpg'; 
        case 'umbrella':
          return 'https://cdn.fcglcdn.com/brainbees/images/products/280x338/14303721a.webp'; 
        case 'raincoat':
          return 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/11168496a.webp'; 
        default:
          return '';
      }
    } else if (gender === 'girls') {
      switch (category.toLowerCase()) {
        case 'footwear':
          return 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16345687a.webp';
        case 'clothes':
          return 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13913598a.webp'; 
        case 'umbrella':
          return 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/14377730a.webp'; 
        case 'raincoat':
          return 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13347116a.webp'; 
        default:
          return '';
      }
    }
  };

  return (
    <Link to={`/category/${gender}/${category.toLowerCase()}`} className="category-card">
      <div className="category-card-content">
        <img src={getImageUrl(gender, category)} alt={category} className="product-img" />
        <h2 className='category-name'>{category}</h2>
      </div>
    </Link>
  );
}

export default CategoryCard;
