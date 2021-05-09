import React, { useState } from "react";
import { authService } from "fbase";
import SignUp from "./SignUp";
import SignIn from "./SignIn"

function AuthForm (props) {
	
 	const [Email, setEmail] = useState("");
 	const [Password, setPassword] = useState("");
 	const [Name, setName] = useState("");
 	const [NewAccount, setNewAccount] = useState(true);
 	const [Error, setError] = useState("");
	
	const onChange = (event) => {
		const {
			target: { name, value },
		} = event;
		if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		} else if (name === "name") {
			setName(value);
		}
	};
	
	const onSubmit = (event) => {
		event.preventDefault();
		try {
			if (NewAccount) {
				authService.createUserWithEmailAndPassword(
					Email,
					Password
				).then((user) => {
					console.log(user)
					user.user.updateProfile({
						displayName: Name,
					})
					console.log(authService.currentUser)
				})
			} else {
				authService.signInWithEmailAndPassword(
					Email, 
					Password
				).then((user) => {
					console.log(user)
				})
			}
		} catch (error) {
			setError(error.message);
		}
	};

	const toggleAccount = () => setNewAccount((prev) => !prev);

	return (
	<>
		<div>
			{NewAccount ? 
					<SignUp 
						onChange={onChange}
						nameValue={Name}
						emailValue={Email}
						passwordValue={Password}
						onSubmit={onSubmit}
						toggleAccount={toggleAccount}
						onSocialClick={props.onSocialClick}
					/> 
					: 
					<SignIn 
						onChange={onChange}
						emailValue={Email}
						passwordValue={Password}
						onSubmit={onSubmit}
						toggleAccount={toggleAccount}
						onSocialClick={props.onSocialClick}
					/>}
		</div>
		<div>
			{Error && <span>{Error}</span>}
		</div>
	</>
	);
};
export default AuthForm;