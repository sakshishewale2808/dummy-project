import { useParams, Link } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import './Category.css';

function Category() {
  const { gender } = useParams();

  const boyImages = [
    'https://cdn.fcglcdn.com/brainbees/images/products/300x364/14244691c.jpg',
    'https://cdn.fcglcdn.com/brainbees/images/products/300x364/14699015a.webp',
    'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16003676a.webp',
    'https://cdn.fcglcdn.com/brainbees/images/products/300x364/14694747a.webp',
  ];

  const girlImages = [
    'https://cdn.fcglcdn.com/brainbees/images/products/300x364/14912597a.webp',
    'https://cdn.fcglcdn.com/brainbees/images/products/300x364/17449151a.webp',
    'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13721648b.jpg',
    'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16232434a.webp'
  ];

  const images = gender === 'boys' ? boyImages : girlImages;

  return (
    <div className="category">
      <h1>
        {gender.charAt(0).toUpperCase() + gender.slice(1)}'s Section {gender === 'boys' ? '👦' : '👧'}
      </h1>
      <div className="image-container">
        <div className="image-track">
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt={`${gender.charAt(0).toUpperCase() + gender.slice(1)} Section`} />
          ))}
        </div>
      </div>
      <h1>Our Categories...Let's choose what you want</h1>
      <div className="categories">
        <Link to={`/category/${gender}/footwear`}><CategoryCard gender={gender} category="Footwear" /></Link>
        <Link to={`/category/${gender}/clothes`}><CategoryCard gender={gender} category="Clothes" /></Link>
        <Link to={`/category/${gender}/umbrella`}><CategoryCard gender={gender} category="Umbrella" /></Link>
        <Link to={`/category/${gender}/raincoat`}><CategoryCard gender={gender} category="Raincoat" /></Link>
      </div>
    </div>
  );
}

export default Category;
