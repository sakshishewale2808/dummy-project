import { useParams } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import './Category.css';


function Category() {
  const { gender } = useParams();

  return (
    <div className="category">
      <h1>
        {gender.charAt(0).toUpperCase() + gender.slice(1)}'s Section {gender === 'boys' ? '👦' : '👧'}
      </h1>
      <div className="categories">
        <CategoryCard gender={gender} category="Footwear" />
        <CategoryCard gender={gender} category="Clothes" />
        <CategoryCard gender={gender} category="Umbrella" />
        <CategoryCard gender={gender} category="Raincoat" />
      </div>
    </div>
  );
}

export default Category;
