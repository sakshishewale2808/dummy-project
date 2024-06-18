import { Link } from 'react-router-dom';
import './BoyGirl.css';

function BoyGirl() {
  return (
    <div className="home">
      <h1>Welcome to Our Babies Corner👦👧</h1>
      <div className="sections">
        <Link to="/category/boys" className="section">
          <img src="https://e0.pxfuel.com/wallpapers/718/906/desktop-wallpaper-stylish-little-boy-pic-gallery-stylish-small-boy.jpg" alt="Boys Section" />
          <h2>Boys</h2>
        </Link>
        <Link to="/category/girls" className="section">
          <img src="https://e0.pxfuel.com/wallpapers/673/438/desktop-wallpaper-cute-baby-girl-cute-indian-girl-baby-indian-girls.jpg" alt="Girls Section" />
          <h2>Girls</h2>
        </Link>
      </div>
    </div>
  );
}

export default BoyGirl;
//https://m.media-amazon.com/images/I/71QkkqTfCQL._AC_UF1000,1000_QL80_.jpg(two cute baby boys)
//baby girl with frock : https://cdn.fcglcdn.com/brainbees/images/products/438x531/16111577a.webp
//https://cdn.fcglcdn.com/brainbees/images/products/300x364/14368654a.webp
//https://cdn.fcglcdn.com/brainbees/images/products/300x364/13083449a.webp
//https://cdn.fcglcdn.com/brainbees/images/products/300x364/14365114a.webp