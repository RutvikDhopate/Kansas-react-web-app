import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
                </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/2345/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS2345 Node JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
                </div>
            </div>
            
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/3456/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        Web Dev 1
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
                </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/4567/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        Web Dev 2
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
                </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/5678/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        Web Dev 3
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
                </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/6789/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        Web Dev 4
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
                </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/7890/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        Web Dev 5
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}