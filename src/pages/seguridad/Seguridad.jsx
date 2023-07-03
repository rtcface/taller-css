import OptionsList from '../main/OptionsList'
import seg from '../../assets/img/seguridad.png'
import './css/seguridad.css'

export const Seguridad = () => {
  return (
   <>
    <section className="seguridad">
        <div className="seguridad__container">
            <h2 className="seguridad__heading">Nucleus es seguro</h2>
            <div className="seguridad__grid">
                <OptionsList/>
                <div className="seguridad__imagen">
                    <img src={seg} alt="seguridad nucleus" />
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
