import './home.css'

export default function Home() {
    return(
        <div>
            <nav className="navbar">
                <span className="navbar-brand mb-0 h1">Artify Ads</span>
            </nav>
            <main>
                <div className="statics container">
                    <h5>Statistics</h5>
                </div>
                <div className="announcements container">
                    <h5>Announcements</h5>
                    <button type="button">+ Add</button>
                </div>
                <div className="audiences container">
                    <h5>Audiences</h5>
                    <button type="button">+ Add</button>
                </div>
            </main>
        </div>
    )
}