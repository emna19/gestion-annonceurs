import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { userProfileAction } from "../../redux/actions/users/userActions";


const Profile = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(userProfileAction())
  },[dispatch])

  const userProfile = useSelector(store => store.userLogin.user)
console.log(userProfile);


  return (
    
    <div className="profile">
      <div className="profile-picture-frame">
        <img
          className="profile-image"
          src="http://bootdey.com/img/Content/avatar/avatar1.png"
          alt=""
        />
        <div className="profile-name-frame">
          <label className="profile-Name  profile-style " htmlFor="inputName">
            name :
          </label>
        </div>
      </div>
      <div className="profile-details-frame">
        <div className="profile-account-details"> Account Details </div>
        <div className="profile-account-organisation profile-style">
          Organisation Name :
        </div>
        <div className="profile-account-email profile-style"> Email : </div>
        <div className="profile-account-phone profile-style "> phone : </div>
        <div className="profile-account-taxID profile-style "> taxID :</div>
        <div className="profile-account-adress profile-style "> adress : </div>
        <div className="profile-account-postcode  profile-style">postcode:</div>
        <div className="profile-account-country profile-style "> country :</div>
        <div className="profile-account-state profile-style "> state :</div>
        <div className="profile-account-city profile-style "> city :</div>
        <button className="profile-button" type="button">
          Change details
        </button>
      </div>
    </div>
  );
};

export default Profile;
