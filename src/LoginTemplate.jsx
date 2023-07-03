import './Login.css'

export const LoginTemplate = () => {
  return (
    <div className="container">
        <div className="login">
           <form className='form-login'>
            <input type="text" className='usr-login'/>
            <input type="password" className='pwd-login'/>
           </form>
           <div className='btn-footer'>
            <button className='button'>Iniciar Sesión</button>
           </div>
        </div>
    </div>
  )
}
