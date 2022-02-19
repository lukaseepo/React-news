import { Link } from 'react-router-dom';
import './Search.scss'

const Search = ({ onChange }) => {

    return (
        <form className="search-container">
            <input type="text" id="search-bar" onChange={(e) => onChange(e.target.value)} placeholder="Search articles"/>
            <Link to='#'>
                <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="" />
            </Link>
        </form>
    )
}

export default Search;
