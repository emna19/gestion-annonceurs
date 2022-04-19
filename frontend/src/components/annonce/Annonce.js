import './Annonce.css'

import { useState } from 'react'

export default function Annonce() {

    const [annonce, setAnnonce] = useState({
        name : '',
        minAge : '',
        maxAge : '',
        keywords : '',
        videoIDs : '',
    }) 
    // still not complete

    function handle(e) {
        const newAnnonce = {...annonce}
        newAnnonce[e.target.id] = e.target.value
        setAnnonce(newAnnonce)
    }

    function submit(e) {

    }

    return(
        <div className="audience annonce">
            <header>
                <nav className="navbar" style={{ height:"59px"}}>
                    <div className="container-fluid">
                        <a className="navbar-brand col-3" href="/Home">
                            <img className="navbar-logo"  src={require("../../assets/artifyLogo.png")} alt="Artify Logo"></img>
                            <span className='navbar-title'>rtify Ads</span>
                        </a>
                        <div className="col-8">
                            <h5 className="navbar-title page-title">Create your Advertisement</h5>
                        </div>
                        
                    </div>
                
                </nav>
            </header>
            <main>
                <form onSubmit={submit}>
                    <div className="card col-6">
                        <div className="row mb">
                            <label htmlFor="exampleInputEmail1" className="nameAud-text form-label">Choose the Advertisement name:</label>
                            <div>
                                <input type="text" placeholder="Name..." className="form-control lg-input" onChange={handle} value={annonce.name} id="name" aria-describedby="emailHelp"/>
                            </div>
                        </div>
                        <div className="col-8 row mb">
                            <div className="col-2 form-label age-text">Date:</div>
                            <div className="col-3">
                                <input type="text" className="age-input form-control" placeholder="Start" onChange={handle} value={annonce.minAge} id="minAge" aria-label="First name"/>
                            </div>
                            <p className='form-label' style={{display: "contents"}}>-</p>
                            <div className="col-3">
                                <input type="text" className="age-input form-control" placeholder="End" onChange={handle} value={annonce.maxAge} id="maxAge" aria-label="Last name"/>
                            </div>
                        </div>
                        <div className="select-row row mb">
                            <div className="col-2 form-label countries-text">Audience:</div>
                                <div className="col-3">
                                    <select style={{margin:"0px"}} className="form-select form-control countries-select"  value={annonce.name} id="countries" aria-label="Default select example">
                                        <option value="" disabled>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-2 text-center form-label countries-text">Sector:</div>
                                <div className="col-3">
                                <select style={{margin:"0px"}} className="form-select form-control countries-select"  value={annonce.name} id="countries" aria-label="Default select example">
                                    <option value="" disabled>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                        </div>

                        <div className="row mb">
                            <label htmlFor="exampleInputPassword1" className="col-2 form-label">Budget:</label>
                            <div className="col-3">
                                <input type="text" placeholder="..." onChange={handle} value={annonce.keywords} id="keywords" className=" form-control" />
                            </div>
                            <label htmlFor="exampleInputPassword1" className="col-2 text-center form-label">Type:</label>
                            <div className="col-3">
                                <input type="text" placeholder="..." onChange={handle} value={annonce.keywords} id="keywords" className=" form-control" />
                            </div>
                            
                        </div>
                        
                        <div className="row mb">
                            <label htmlFor="exampleInputPassword1" className="col-2 form-label">Page url:</label>
                            <div className="col-auto">
                                <input type="text" placeholder="https://www.google.com/" onChange={handle} value={annonce.keywords} id="keywords" className="lg-input form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="exampleInputPassword1" className="col-auto form-label">Source url:</label>
                            <div className="col-auto">
                                <input type="text" placeholder="https://www.google.com/" onChange={handle} value={annonce.videoIDs} id="videoIDs" className="lg-input form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 buttons">
                        <button type="reset" className="btn cancel btn-primary">Cancel</button>
                        <button type="submit" className="btn save btn-primary">Save</button>
                    </div> 
                </form>
            </main>
        </div>
    )
}