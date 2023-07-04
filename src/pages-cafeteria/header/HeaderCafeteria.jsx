export const HeaderCafeteria = () => {
  return (
    <>
        <header className="header header__inicio">
            <div className="container-header container">
                <div className="header__bar">
                  <div className="logo">
                    <img src="src/assets/img/logo-cafeteria.svg" alt="logo cafeteria" />
                  </div>
                  <nav className="main-nav">
                    <a href="#">Inicio</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Proceso</a>
                    <a href="#">Menú</a>
                    <a href="#">Galeria</a>
                    <a href="#">Contacto</a>
                  </nav>
                </div>
                <div className="header__text">
                  <h1>Disfruta de una deliciosa taza de café</h1>
                </div>
            </div>            
        </header>
    </>
  )
}
