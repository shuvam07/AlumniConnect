import React from 'react'
import Post from './post'

export default class extends React.Component{
	onLogin(){
		this.username=this.usernameInput.value;
		this.password=this.PasswordInput.value;
		if(this.validate()){
			<Post />
		}
	}
	validate(){
		return true;
	}
	render(){
		return(
		<div>
			<form>
			    <h2>Login Form</h2>

			    <input id='username' type='text' placeholder='username' ref={(input) => { this.usernameInput = input }} />
	            <input type='password' placeholder='password' ref={(input) => { this.PasswordInput = input }} />
			    <button type="submit" onClick={this.onLogin.bind(this)}>Login</button>

		    </form> 
		    <p><a href="#">Forgot your password?</a></p>

		    <style jsx>{`
		    	h2{
		    		color: #458994;
		    	}

		      form{
		      		 border: 5px solid #f1f1f1;
		      		 width: 20%
		    	}

		       input[type=text], input[type=password] {
				    width: 100%;
				    padding: 12px 20px;
				    margin: 8px 0;
				    display: inline-block;
				    border: 1px solid #ccc;
				    box-sizing: border-box;
				}

				button {
				    background-color: #2a64ff;
				    color: white;
				    padding: 14px 20px;
				    margin: 8px 0;
				    border: none;
				    cursor: pointer;
				    width: 100%;
				}

				button:hover {
				    opacity: 0.8;
				}
		    `}</style>
	    </div>
			
		)
	}

}
