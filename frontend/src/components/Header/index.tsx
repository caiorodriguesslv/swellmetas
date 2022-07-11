import  logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (

        <header>

            <div className="swell-logo-container">

                <img src={logo} alt="Swell"/>
                    <h1>SWELL Metas</h1>
                    <p>Desenvolvido por <a href="https://www.instagram.com/caio.rodriguesslv/">Caio Rodrigues</a></p>
            </div>

        </header>

    )
}

export default Header
