import React from "react";
import "./updateProfile.css";

const UpdateProfile = () => {
  return (
    <div className="update-profile">
      <div className="update-profile-picture-frame">
        <img
          className="update-profile-image"
          src="http://bootdey.com/img/Content/avatar/avatar1.png"
          alt=""
        />
        <div className="update-profile-name-frame">
          <input
            className="update-profile-Name  update-profile-style"
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="update-profile-details-frame">
        <div className="update-profile-account-details"> Account Details </div>
        <input
          className="update-profile-account-organisation  update-profile-style"
          type="text"
          placeholder="  Organisation Name"
        />
        <input
          className="update-profile-account-email  update-profile-style"
          type="email"
          placeholder=" Email "
        />

        <input
          className="update-profile-account-phone   update-profile-style"
          type="number"
          placeholder=" phone "
        />

        <input
          className="update-profile-account-taxID update-profile-style"
          type="number"
          placeholder=" taxID "
        />

        <input
          className="update-profile-account-adress update-profile-style"
          type="text"
          placeholder="  adress  "
        />

        <input
          className="update-profile-account-postcode update-profile-style"
          type="number"
          placeholder="postcode"
        />

        <input
          className="update-profile-account-country update-profile-style"
          type="text"
          placeholder="country"
        />

        <input
          className="update-profile-account-state update-profile-style"
          type="text"
          placeholder="state"
        />

        <input
          className="update-profile-account-city update-profile-style"
          type="text"
          placeholder="city"
        />

        <button className="update-profile-button" type="button">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
