import logo from './../../assets/img/logo.svg'; // with import
import { Navegacion } from './Navegacion';
import './css/Header.css'
export const HeaderBarra = () => {
  return (
    <>
      <div className="header__barra">
        <div className="header__logo">
          <img src={ logo } alt="logo" />          
        </div>
        <Navegacion/>
      </div>     
    </>
  )
}
