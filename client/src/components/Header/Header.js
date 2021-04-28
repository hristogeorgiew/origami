import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="/white-origami-bird.png" alt="White Origami"/></li>
                <Link to="/"><NavigationItem>Home</NavigationItem></Link>
                <Link to="/about"><NavigationItem>About</NavigationItem></Link>
                <Link to="/contact"><NavigationItem>Contact</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Pesho</NavigationItem></Link>
                <Link to="/about/gosho"><NavigationItem>Gosho</NavigationItem></Link>
                <Link to="/about/meshosho"><NavigationItem>Going to 6</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Going to 7</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Going to 8</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Going to 9</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Going to 10</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Going to 11</NavigationItem></Link>
            </ul>
      </nav>
    );
}

export default Header;