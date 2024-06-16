import { Link } from 'react-router-dom';
import './BoyGirl.css';

function BoyGirl() {
  return (
    <div className="home">
      <h1>Welcome to Our Babies Corner</h1>
      <div className="sections">
        <Link to="/category/boys" className="section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI3mAkEsaffMMhyTeqbnfisArhSYZOXWE6A&s" alt="Boys Section" />
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
