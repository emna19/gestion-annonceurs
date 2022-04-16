import React from "react";


const Profile = () => {
  return (
    <div className="row">
      <div className="col-xl-4">
        {/* <!-- Profile picture card--> */}
        <div className="card mb-4 mb-xl-0">
          <div className="card-header">Profile Picture</div>
          <div className="card-body text-center">
            {/* <!-- Profile picture image--> */}
            <img
              className="img-account-profile rounded-circle mb-2"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-xl-8">
        {/* <!-- Account details card--> */}
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              {/* <!-- Form Group (username)--> */}
              <div className="mb-3">
                <label className="small mb-1" for="inputUsername">
                  Username{" "}
                </label>
              </div>
              {/* <!-- Form Row--> */}
              <div className="row gx-3 mb-3" >
                {/* <!-- Form Group (first name)--> */}
                <div className="col-md-6">
                  <label className="small mb-1" for="inputFirstName">
                    First name
                  </label>
                </div>
                {/* <!-- Form Group (last name)--> */}
                <div className="col-md-6">
                  <label className="small mb-1" for="inputLastName">
                    Last name
                  </label>
                </div>
              </div>
              {/* <!-- Form Row        --> */}
              <div className="row gx-3 mb-3">
                {/* <!-- Form Group (organization name)--> */}
                <div className="col-md-6">
                  <label className="small mb-1" for="inputOrgName">
                    Organization name
                  </label>
                </div>
                {/* <!-- Form Group (location)--> */}
                <div className="col-md-6">
                  <label className="small mb-1" for="inputLocation">
                    Location
                  </label>
                </div>
              </div>
              {/* <!-- Form Group (email address)--> */}
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">
                  Email address
                </label>
              </div>
              {/* <!-- Form Row--> */}
              <div className="row gx-3 mb-3">
                {/* <!-- Form Group (phone number)--> */}
                <div className="col-md-6">
                  <label className="small mb-1" for="inputPhone">
                    Phone number
                  </label>
                </div>
                {/* <!-- Form Group (birthday)--> */}
                <div className="col-md-6">
                  <label className="small mb-1" for="inputBirthday">
                    Birthday
                  </label>
                </div>
              </div>
              {/* <!-- Save changes button--> */}
              <button className="btn btn-primary" type="button">
                Change details
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
