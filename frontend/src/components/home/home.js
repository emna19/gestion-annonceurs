import './home.css'
import Axios from 'axios'
import {useEffect , useState} from 'react'

export default function Home() {

  const isActive= "carousel-item active card text-center"
  const nActive= "carousel-item card text-center"

  const [audience, setAudience] = useState([{}])

  const [annonce, setAnnonce] = useState([])

    function addAnnonce(e) {
        window.location.href = '/Annonce'
    }

  function addAudience(e) {
    window.location.href = '/Audience'
  }

  function GetAudienceById(props) {
    const aud = audience.find(element => element._id === props.id)
    if(aud !== undefined){
    return aud.name}
  }

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    fetch('http://localhost:5000/audiences')
      .then(res => res.json())
      .then(data => setAudience(data))
    
    fetch('http://localhost:5000/annonces')
      .then(res => res.json())
      .then(data => setAnnonce(data))
      

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


          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">  
            <div className="carousel-inner audiences announcements login-container">

              {annonce.map((item, index) =>(
                  <div key={index} className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{ item.name }</h5>
                    <div className='row mb-3'>
                      <span className="col-auto text-start card-text">Date:</span>
                      <div className="col-9 d-flex text-start flex-wrap" style={{gap:"8px"}}>
                        <div className='col-auto minAge'>{ item.startDate }</div>-
                        <div className='col-auto maxAge'>{ item.endtDate }</div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <span className="col-auto card-text">Sector:</span>
                      <div className='col-8 text-start countries'>{item.sector }</div>
                    </div>
                    <div className="row mb-3">
                      <span className="col-auto card-text">Budget:</span>
                      <div className='col-8 text-start keywords'>{ item.budget }</div>
                    </div>
                    <div className="row mb-3">
                      <span className="col-auto card-text">Audience:</span>
                      <div className='col-8 text-start movieIds'> <GetAudienceById id = {item.audience}/> </div>
                    </div> 
                    <div className="row mb-3">
                      <span className="col-auto card-text">Page url:</span>
                      <div className='col-7 text-start keywords'>{ item.clickUrl }</div>
                    </div>
                    <div className="row mb-3">
                      <span className="col-auto card-text">Source url:</span>
                      <div className='col-7 text-start keywords'>{ item.sourceUrl }</div>
                    </div>
                    <div className="row mb-4">
                      <span className="col-auto card-text">Type:</span>
                      <div className='col-8 text-start keywords'>{ item.type }</div>
                    </div>
                    {item.isValid && <div className='row mb-2 validation'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="col-auto bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                      <div className='col-auto'>Waiting for validation</div>
                    </div>}
                  </div>
                </div>
                ))}

            </div>
          </div>


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