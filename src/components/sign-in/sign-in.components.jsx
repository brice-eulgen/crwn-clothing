import React from "react";
import FormInput from "../form-input/form-input.components";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.components";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						id=""
						label="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						id=""
						label="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
