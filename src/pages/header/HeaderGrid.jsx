import app from './../../assets/img/app_1.svg';
import './css/Header.css'

export const HeaderGrid = () => {
  return (
    <div className="header__grid">
          <div className="header__texto">
              <h1 className="header__heading">Recibe y realiza pagos en tu celular con nucleus</h1>
              <a className="header__boton" href="#">Obtener Cuenta</a>
          </div>
          <div className="header__grafico">
              <img className="header__imagen" src={app} alt="imagen nucleus app " />
          </div>
      </div>
  )
}
