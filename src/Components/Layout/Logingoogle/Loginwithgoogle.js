import React from "react";
import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";
function Logingoog(props) {
  const googleresponse = (response) => {
    console.log(response.profileObj);
  };
  return (
    <div>
      <GoogleLogin
        clientId="728804847769-8sc7imo7j9lkfki6t8kdgt9tljmd3q8d.apps.googleusercontent.com"
        onFailure={googleresponse}
        onSuccess={props.log}
      />
    </div>
  );
}

export default withRouter(Logingoog);
