import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		// Firebase login
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		// Firebase register
		auth
			.createUserWithEmailAndPassword(email, password)
			// Create user with email and pw and returns object
			.then((auth) => {
				// Successfully creates new user with email and pw
				console.log(auth);
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>

			<div className="login__spaceContainer">
				<div className="login__container">
					<h1>Sign in</h1>

					<form action="">
						<h5>Email</h5>
						{/* Input field for email with value of email and event e set to user input */}
						<input
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<h5>Password</h5>
						{/* Input field for email with value of email and event e set to user input */}
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</form>

					<button
						className="login__signInButton"
						onClick={signIn}
						type="submit"
					>
						Sign in
					</button>

					<p>
						By continuing, you agree to FAKE AMAZON CLONE Conditions of Use and
						Privacy Notice.
					</p>
				</div>

				<h4 className="login__intro">New to Amazon?</h4>

				<button className="login__registerButton" onClick={register}>
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
