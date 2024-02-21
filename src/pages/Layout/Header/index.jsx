import { useSelector } from 'react-redux';
import { PopularAlbums } from './PopularAlbums';
import { NavLink } from 'react-router-dom';
import "./style.scss"

function Header() {

  const theme = useSelector(state => state.theme.value); 

  return (
    <div  className='Header' id={theme}>
      {PopularAlbums.map((item)=>(
        <NavLink to={`/CategoriesHeader/${item.link}`} className={({isActive})=>{return isActive?"activeHeader" : ""}} key={crypto.randomUUID()} >
          <div className='Header_link_conteiner'>
            <h4 className='Header_link'>{item.title}</h4>
          </div>
          
        </NavLink>
        
      ))}
    </div>
  );
}

export default Header;