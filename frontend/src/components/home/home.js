import './home.css'
export default function Home() {

  function add(e) {
    window.location.href = '/Audience'
  }

    return(
      <div className="home"> 
        <main className="container-home">
          <div className="home-container-head">
            <h5 className="home-container-title">Statistics</h5>
          </div>
          <div className="statics login-container"></div>
          <div className="home-container-head">
            <h5 className="home-container-title">Advertisements</h5>
            <button className="home-container-Add" type="button">+ Add</button>
          </div>  
          <div className="announcements login-container"></div>
          <div className="home-container-head">
            <h5 className="home-container-title">Audiences</h5>
            <button onClick={add} className="home-container-Add" type="button">+ Add</button>
          </div>                
          <div className="audiences login-container"></div>
        </main>
      </div>
    )
}