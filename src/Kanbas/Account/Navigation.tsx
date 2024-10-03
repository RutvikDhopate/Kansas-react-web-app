import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" style={{marginTop:"10px"}} className="wd list-group fs-5 rounded-0">
      <Link to={`/Kanbas/Account/Signin`} className="list-group-item active border border-0"> Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`} className="list-group-item border border-0 text-danger"> Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} className="list-group-item border border-0 text-danger"> Profile </Link> <br/>
    </div>
);}
