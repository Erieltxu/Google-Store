import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="footerContent">
                <div className="redes-sociales">
                    <a href="https://x.com/madebygoogle"><img src="src\assets\img\icons\SM-x.svg" alt="tiwtter"/></a>
                    <a href="https://www.instagram.com/madebygoogle/"><img src="src\assets\img\icons\SM-instagram.svg" alt="Logo de Instagram"/></a>
                    <a href="https://www.facebook.com/madebygoogle"><img src="src\assets\img\icons\SM-facebook.svg" alt="Logo de Facebook"/></a>
                    <a href="https://www.youtube.com/madebygoogle"><img src="src\assets\img\icons\SM-youtube.svg" alt="Logo de Youtube"/></a>
                    <a href="https://www.tiktok.com/@googlepixel"><img src="src\assets\img\icons\SM-tiktok.svg" alt="Logo de Tik Tok"/></a>
                </div>
                    
                <div className="privacy">
                    <a className="spain"href="#">
                        <img src="src\assets\img\icons\Spain.svg" alt="Bandera de España"/> 
                        <p>Spain</p>
                    </a>
                    <a href="#"><p>Privacy</p></a>
                    <a href="#"><p>Google Nest Commiment to Privacy</p></a>
                    <a href="#"><p>Seves Terms</p></a>
                    <a href="#"><p>Terms of Service</p></a>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;