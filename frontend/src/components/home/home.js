import './home.css'

export default function Home() {
    return(
        <div>
            
            <main>
                <h5>Statistics</h5>
                <div className="statics container">
                </div>
                <h5>Announcements</h5>
                <button type="button">+ Add</button>
                <div className="announcements container">   
                </div>
                <h5>Audiences</h5>
                <button type="button">+ Add</button>
                <div className="audiences container"> 
                </div>
            </main>
        </div>
    )
}