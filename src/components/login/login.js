import React from "react"
import LoginCard from "./logincard"

// Language: javascript
// Create login component

const Login = () => {
    return (
        <div className="login">
            <LoginCard>
                <h1>Login</h1>
                <form>  
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button> 
                </form>
            </LoginCard>

        </div>  
    )
}

export default Login