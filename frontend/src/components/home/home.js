import './home.css'
export default function Home() {
    return(
        <div className="home">
            
            <main>
                <h5>Statistics</h5>
                <div className="statics login-container">
                </div>
                <h5>Announcements</h5>
                <button type="button">+ Add</button>
                <div className="announcements login-container">   
                </div>
                <h5>Audiences</h5>
                <button type="button">+ Add</button>
                <div className="audiences login-container"> 
                </div>
            </main>
        </div>
    )
}