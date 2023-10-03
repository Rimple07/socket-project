import React from "react";
import sample from "../assets/videos/sample.mp4"
import "./SignIn.css"
import SignInForm from "./SignInForm";

function SignIn() {
	return (
		<div className="main-container-login">
			<div className="video-container">
				<video className="videoTag" autoPlay loop muted>
					<source src={sample} type="video/mp4" />
				</video>{" "}
			</div>
            <div className="signin-form-container">  <SignInForm/></div>
          
		</div>
	);
}
export default SignIn;