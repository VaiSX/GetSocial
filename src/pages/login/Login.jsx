import { Link } from "react-router-dom"
import "./login.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {

    const {login}= useContext(AuthContext);

    const handleLogin = () =>{
        login();
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Montes nascetur ridiculus mus mauris. </p>
                    <span>Don't you have an account ?</span>
                    <Link to="/register">
                    <button>Register</button>       
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login