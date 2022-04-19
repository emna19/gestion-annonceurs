import './home.css'
import Axios from 'axios'
import {useEffect , useState} from 'react'

export default function Home() {

  const isActive= "carousel-item active card text-center"
  const nActive= "carousel-item card text-center"

  const [audience, setAudience] = useState([{}])

    function addAnnonce(e) {
        window.location.href = '/Annonce'
    }

  function addAudience(e) {
    window.location.href = '/Audience'
  }

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    fetch('http://localhost:5000/audiences')
        .then(res => res.json())
        .then(data => setAudience(data))

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

    return(
      <div className="home"> 
        <main className="container-home">
          <div className="home-container-head">
            <h5 className="home-container-title">Statistics</h5>
          </div>
          <div className="statics login-container"></div>
          <div className="home-container-head">
            <h5 className="home-container-title">Advertisements</h5>
            <button onClick={addAnnonce} className="home-container-Add" type="button">+ Add</button>
          </div>  
          <div className="announcements login-container"></div>
          <div className="home-container-head">
            <h5 className="home-container-title">Audiences</h5>
            <button onClick={addAudience} className="home-container-Add" type="button">+ Add</button>
          </div>                
          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
            <div className="carousel-inner audiences login-container">
            {audience.map((item, index) =>(
                <div key={index} className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{ item.name }</h5>
                  <div className='row mb-3'>
                    <span className="col-4 text-start card-text">Age:</span>
                    <div className="col-8 d-inline-flex" style={{gap:"8px"}}>
                      <div className='minAge'>{ item.minAge }</div>-
                      <div className='maxAge'>{ item.maxAge }</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <span className="col-auto card-text">Countries:</span>
                    <div className='col-8 text-start countries'>{item.countries != null && item.countries.map((element, i) => (<a key={i}>{element},</a>)) }</div>
                  </div>
                  <div className="row mb-3">
                    <span className="col-auto card-text">Keywords:</span>
                    <div className='col-8 text-start keywords'>{ item.keywords != null && item.keywords.map((element, i) => (<a key={i}>{element},</a>)) }</div>
                  </div>
                  <div className="row mb-3">
                    <span className="col-auto card-text">Show IDs:</span>
                    <div className='col-8 text-start movieIds'>{ item.videoIDs != null && item.videoIDs.map((element, i) => (<a key={i}>{element},</a>)) }</div>
                  </div>  
                </div>
              </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>  
          </div>
        </main>
      </div>
    )
}