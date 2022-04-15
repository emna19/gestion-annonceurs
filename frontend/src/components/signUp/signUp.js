import './signUp.css';
import { useState } from 'react';
import Axios from 'axios';

//add background color to signup
document.body.style ='background-color:  #114a71';


export default function SignUp() {
    const url = "http://localhost:5000/users"
    const [user, setUser] = useState(
        {
            name: '',
            photo: '',
            email: '',
            password: '',
            organistaion: '',
            phone: '',
            country: '',
            city: '',
            codePostal: '',
            taxID: '',
            adress: '',
    });

    function handle(e) {
        const newUser = {...user}
        newUser[e.target.id] = e.target.value
        setUser(newUser)
    }

    function submit(e) {
        e.preventDefault();
        console.log(e)
        Axios.post(url, {
            name: user.name,
            photo: user.photo,
            email: user.email,
            password: user.password,
            organistaion: user.organistaion,
            phone: user.phone,
            country: user.country,
            city: user.city,
            codePostal: user.codePostal,
            taxID: user.taxID,
            adress: user.adress,
            isAdmin: true
        })
        .then(res => {window.location.href = '/login'})
    }
        


    return(
        <div>
            <div className="card col-5 text-center position-absolute top-50 start-50 translate-middle">
                <div className="card-body">
                    <h5 className="card-title">Sign up to Artify Ads</h5>
                    <form className="row g-2" onSubmit={submit}>
                        <div className="input-elements row g-2">
                            <div className="col-md-7">
                                <input type="text" className="form-control" onChange={handle} id="name" value={user.name} placeholder= "Name" required/>
                            </div>
                            <div className="col-md-5">
                                <input type="text" className="form-control" onChange={handle} id="photo" value={user.photo} placeholder= "Photo" required/>
                            </div>
                        </div>
                        <div className="input-elements row g-2">
                            <div className="col">
                                <div className="Email input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="email" className="Email-text form-control" onChange={handle} id="email" value={user.email} placeholder= "Email" aria-describedby="inputGroupPrepend" required/>
                                </div>
                            </div>
                        </div>
                        <div className="input-elements row g-2">
                            <div className="col-md-5">
                                <input type="text" className="form-control" onChange={handle} id="organistaion" value={user.organistaion} placeholder= "Organisation" required/>
                            </div>
                            <div className="col-md-7">
                                <input type="password" className="form-control" onChange={handle} id="password" value={user.password} placeholder= "Password" required/>
                            </div>
                        </div>
                        <div className="input-elements row g-2">
                            <div className="col-md-7">
                                <input type="text" className="form-control" onChange={handle} id="phone" value={user.phone} placeholder= "Phone" required/>
                            </div>
                            <div className="col-md-5">
                                <input type="text" className="form-control" onChange={handle} id="taxID" value={user.taxID} placeholder= "Tax ID" required/>
                            </div>
                        </div>
                        <div className="input-elements row g-2">
                            <div className="col-md-7">
                                <input type="text" className="form-control" onChange={handle} id="adress" value={user.adress} placeholder= "Adresse" required/>
                            </div>
                            <div className="col-md-5">
                                <input type="text" className="form-control" onChange={handle} id="codePostal" value={user.codePostal} placeholder= "Postcode" required/>
                            </div>
                        </div>
                        <div className="input-elements row g-2">
                            <div className="col-md-4">
                                <input type="text" className="form-control" onChange={handle} id="country" value={user.country} placeholder= "Country" required/>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select" id="validationCustom04" defaultValue="" required>
                                <option value="" disabled>State</option>
                                <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select" onChange={handle} id="city" value={user.city} placeholder="" required>
                                    <option value="" disabled >City</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="row g-2">
                            <div className="form-check col-auto">
                                <input className="checkbox form-check-input" type="checkbox" id="invalidCheck" required/>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div className="row g-2">
                            <button className="col-md btn btn-primary" type="submit">SIGN UP</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>)
}