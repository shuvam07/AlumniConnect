export default () => (
	<div>
		<form>
		    <h2>Login Form</h2>
		    <div class="imgcontainer">
		    	<img src="" alt="" class="default_pic"></img>
		    </div>
		    <label><b>Username</b></label>
		    <input type="text" placeholder="Enter Username"/>

		    <label><b>Password</b></label>
		    <input type="password" placeholder="Enter Password"/>

		    <button type="submit">Login</button>
	    </form> 
	    <p><a href="#">Forgot your password?</a></p>
	    <div class="create">
		    <h2>Create Account</h2>

		    <label><b>Username</b></label>
		    <input type="text" placeholder="Enter Username"/>

		    <label><b>Password</b></label>
		    <input type="password" placeholder="Enter Password"/>

		    <button type="submit">Create Account</button>
		</div>

	    <style jsx>{`
	    	h2{
	    		color: #458994;
	    	}

	      form{
	      		 border: 5px solid #f1f1f1;
	      		 width: 40%
	    	}

	      .create{
	      	border: 5px solid #f1f1f1;
	      	width: 50%
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

			.imgcontainer {
			    text-align: center;
			    margin: 24px 0 12px 0;
			}

	      p {
	        line-height: 22px;
	      }

	      .imgcontainer {
			    text-align: center;
			    margin: 24px 0 12px 0;
			}

			img.default_pic {
			    width: 40%;
			    border-radius: 50%;
			}
	    `}</style>
    </div>
)