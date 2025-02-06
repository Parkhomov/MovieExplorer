import "./css/Footer.css"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import telegram from "../images/telegram.svg"
import github from "../images/github.svg"

function Footer() {
    return (
        <>
            <div className="footer-container">
                <a target="_blank" href="https://t.me/Noname21145"> <img src={telegram} alt="Telegram" /></a>
                <a target="_blank" href="https://www.instagram.com/bogdanparkhomov"> <img src={instagram} alt="Instagram" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/bohdan-parkhomov-35245b340/"> <img src={linkedin} 
                alt="Linkedin" /></a>
                <a target="_blank" href="https://github.com/Parkhomov"> <img src={github} 
                alt="Github" /></a>
            </div>
        </>
    )
}

export default Footer;