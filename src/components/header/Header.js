import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
       <header className='header-section'>
           <div className="container">
               <div className="header-items">
                   <nav>
                       <li>
                           <Link to='/'>Home</Link>
                       </li>
                       <li>
                            <Link to='/category'>Category</Link>
                       </li>
                   </nav>
               </div>
           </div>
       </header> 
    )
}

export default Header
