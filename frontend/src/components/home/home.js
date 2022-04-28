import './home.css'
import { parseISO, format } from 'date-fns';
import {useEffect , useState} from 'react'
import  Axios  from 'axios';
import AudView from '../audiences/AudView';
import AnnView from '../annonce/AnnView';
import BarChart from '../charts/BarChart';

export default function Home() {

  // const isActive= "carousel-item active card text-center"
  // const nActive= "carousel-item card text-center"

  const [audience, setAudience] = useState([])

  

  

  // const [chartAudience, setChartAudience] = useState({
  //   labels: labels,
  //   datasets: [{
  //     label:'Audience Age',
  //     data: data
  //   }]
  // })

  // console.log(chartAudience)

  const [annonce, setAnnonce] = useState([])

  const [isCheckedAnnonce, setIsCheckedAnnonce] = useState([])

  const [isCheckedAllAnnonce, setIsCheckedAllAnnonce] = useState(false)

  const [isCheckedAudience, setIsCheckedAudience] = useState([])

  const [isCheckedAllAudience, setIsCheckedAllAudience] = useState(false)

  const annonceUrl = "http://localhost:5000/annonces/"

  const audienceUrl = "http://localhost:5000/audiences/"

  const [viewClicked, setViewClicked] = useState(false)

  const [componentName, setComponentName] = useState()

  const [item, setItem] = useState({})

  const [chartAudience, setChartAudience] = useState({})


  const styles = {
    container_home: {
      zIndex: viewClicked ? -1 : null,	
      position: viewClicked ? "fixed" : null,
      filter: viewClicked ? "blur(1px)" : null,
    },

    home: {
      zIndex: viewClicked ? -1 : null,
      height: viewClicked ? "660px" : null,
      backgroundColor: viewClicked ? "#00000094" : null,
    }
  }

  function addAnnonce(e) {
      window.location.href = '/home/annonce/create'
  }

  function deleteAnnonce() {
    isCheckedAnnonce.map(item => Axios.delete(annonceUrl+item).then(res => {window.location.href = '/home'}))
    
  }

  function addAudience(e) {
    window.location.href = '/home/audience/create'
  }

  function deleteAudience() {
    isCheckedAudience.map(item => Axios.delete(audienceUrl+item).then(res => {window.location.href = '/home'}))
    
  }

  function handleChangeAnnonce(e) {
    const { id, checked } = e.target;
    setIsCheckedAnnonce([...isCheckedAnnonce, id]);
    if (!checked) {
      setIsCheckedAnnonce(isCheckedAnnonce.filter(item => item !== id));
    }
  }

  function handleSelectAllAnnonce() {
    setIsCheckedAllAnnonce(!isCheckedAllAnnonce)
    if (!isCheckedAllAnnonce) {
      setIsCheckedAnnonce(annonce.map(item => item._id))
    }else {setIsCheckedAnnonce([])}
  }

  function handleChangeAudience(e) {
    const { id, checked } = e.target;
    setIsCheckedAudience([...isCheckedAudience, id]);
    if (!checked) {
      setIsCheckedAudience(isCheckedAudience.filter(item => item !== id));
    }
  }

  function handleSelectAllAudience() {
    setIsCheckedAllAudience(!isCheckedAllAudience)
    if (!isCheckedAllAudience) {
      setIsCheckedAudience(audience.map(item => item._id))
    }else {setIsCheckedAudience([])}
  }


  function GetAudienceById(props) {
    const aud = audience.find(element => element._id === props.id)
    
    if(aud !== undefined){
    return aud.name}
  }

  let labels=[]
  let age=[]
  let name=[]
  

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    fetch('http://localhost:5000/audiences')
      .then(res => res.json())
      .then(data => {
        setAudience(data)
        for(const dataObj of data){
          labels.push(parseInt(dataObj.minAge))
          labels.push(parseInt(dataObj.maxAge))
          name.push(dataObj.name)
        }
        setChartAudience({
          labels: name,
          datasets: [{
            label:'Audience Age',
            data: labels
          }]
        })
      })
    
    fetch('http://localhost:5000/annonces')
      .then(res => res.json())
      .then(data => setAnnonce(data))
      

// empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

    return(
      <div className="home" style={styles.home}> 
        <main className="container-home" style={styles.container_home}>
          <div className="home-container-head">
            <h5 className="home-container-title">Statistics</h5>
          </div>
          <div className="statics login-container">
            <div style={{width: 400}}>{ audience.length!== 0 && <BarChart chartData={chartAudience}/>} </div>
          </div>
          <div className="home-container-head">
            <h5 className="home-container-title">Advertisements</h5>
            <div className='row mb-2 justify-content-between'>
              <div className='col-auto'>
                <button className="home-container-Delete" type="button" onClick={deleteAnnonce}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#F17B22" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  Delete Selected
                </button>
              </div>
              <div className='col-auto'>
                <button onClick={addAnnonce} className="home-container-Add" type="button">+ Add</button>
              </div>
            </div>
          </div>


          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">  
            <div className="row carousel-inner audiences announcements login-container">
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleSelectAllAnnonce} checked={isCheckedAllAnnonce} style={{float: "right"}}/>
                  <label className="form-check-label" htmlFor="flexCheckDefault"></label>
              </div>
              {annonce.map((item, index) =>(
                  <div key={index} className="card text-center">
                  <div className="card-body">
                    <div className='row mb-2 justify-content-between'>
                      <div className="col-auto form-check">
                        <input className="form-check-input" type="checkbox" value="" id={item._id} onChange={handleChangeAnnonce} checked={isCheckedAnnonce.includes(item._id)}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                      </div>
                      <div className="col-auto" style={{padding:"0px"}}>
                        <button type="button" className="home-container-Delete" onClick={() => {return (
                            setViewClicked(!viewClicked),
                            setComponentName("Annonce"),
                            setItem(item)
                           )} }>
                          View
                        </button>
                      </div>
                      
                    </div>
                    <h5 className="mb-3 card-title">{ item.name }</h5>
                    <div className='row mb-3'>
                      <span className="col-auto text-start card-text">Start date:</span>
                      <div className='col-auto'>{ format( parseISO(item.startDate), 'yyyy/MM/dd kk:mm:ss') }</div>
                    </div>
                    <div className='row mb-3'>
                      <span className="col-auto text-start card-text">End date:</span>
                      <div className='col-auto'>{ format( parseISO(item.endtDate), 'yyyy/MM/dd kk:mm:ss') }</div>
                    </div>
                    {item.isValid ?  null: <div className='row mb-2 validation'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="col-auto bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                      <div className='col-auto'>Waiting for validation</div>
                    </div> }
                  </div>
                </div>
                ))}

            </div>
          </div>


          <div className="home-container-head">
            <h5 className="home-container-title">Audiences</h5>
            <div className='row mb-2 justify-content-between'>
              <div className='col-auto'>
                <button className="home-container-Delete" type="button" onClick={deleteAudience}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#F17B22" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  Delete Selected
                </button>
              </div>
              <div className='col-auto'>
                <button onClick={addAudience} className="home-container-Add" type="button">+ Add</button>
              </div>
            </div>
          </div>                
          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
            <div className="row carousel-inner audiences login-container">
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleSelectAllAudience} checked={isCheckedAllAudience} style={{float: "right"}}/>
                  <label className="form-check-label" htmlFor="flexCheckDefault"></label>
              </div>
            {audience.map((item, index) =>(
                
                <div key={index} className="card text-center">
                <div className="card-body">
                  <div className='row mb-2 justify-content-between'>
                    <div className="col-auto form-check">
                      <input className="form-check-input" type="checkbox" value="" id={item._id} onChange={handleChangeAudience} checked={isCheckedAudience.includes(item._id)}/>
                      <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                    </div>
                    <div className="col-auto" style={{padding:"0px"}}>
                        <button type="button" className="home-container-Delete" onClick={() => {return (
                            setViewClicked(!viewClicked),
                            setComponentName("Audience"),
                            setItem(item)
                           )} }>
                          View
                        </button>
                    </div>
                  </div>
                  <h5 className="card-title">{ item.name }</h5>
                </div>
              </div>
              ))}
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>   */}
          </div>
        </main>

        {viewClicked && <div className="overlay">
            <div >
              {componentName === "Annonce" ? <AnnView audienceID={<GetAudienceById id = {item.audience}/>} onClick={() => {setViewClicked(!viewClicked)}} infos= {item}/> : <AudView onClick={() => {setViewClicked(!viewClicked)}} infos= {item}/>}
            </div>
          </div>
        }
        
      </div>
    )
}