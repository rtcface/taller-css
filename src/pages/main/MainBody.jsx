import appNucleus from './../../assets/img/app_2.svg';
import OptionsList from './OptionsList';
import './css/main.css'
export const MainBody = () => {
  return (
    <>
        <main className="nucleus">
            <h2 className="nucleus__heading">¿Qué es?</h2>
            <div className="nucleus__container">
                <div className="nucleus__grid">
                    <div className="nucleus__imagen">
                        <img src={appNucleus} alt="app nucleus" />
                    </div>
                    <OptionsList/>
                </div>
            </div>
        </main>
    </>
  )
}
