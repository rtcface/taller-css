import { HeaderBarra } from './HeaderBarra'
import { HeaderGrid } from './HeaderGrid'
import './css/Header.css'
export const Header = () => {
  return (
    <>
        <header className="header">
            <div className="header__container">
              <HeaderBarra/>
              <HeaderGrid/>
            </div>            
        </header>
    </>
  )
}
