import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen" style={{marginLeft:"30px"}}>
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" className="form-control mb-2"/> 
      <input id="wd-password" placeholder="password" type="password" className="form-control mb-2"/> 
      <Link  id="wd-signin-btn"
             to="/Kanbas/Dashboard" className="btn btn-primary w-100 mb-2"> Sign in </Link>
      <Link  id="wd-signup-link" to="/Kanbas/Account/Signup" className="btn btn-primary w-100">Sign up</Link>
    </div>
);}