import './navbar.css'

export default function Navbar() {
    return(
        <nav className="navbar">
            <span className="navbar-brand mb-0 h1">
                <img className="navbar-logo"  src={require("../../assets/artifyLogo.png")} alt="Artify Logo"></img>
                <span className='navbar-title'>rtify Ads</span>
            </span>
        </nav>
    )
}