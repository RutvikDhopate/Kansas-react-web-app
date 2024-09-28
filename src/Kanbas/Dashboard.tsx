import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2345/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS2345 Node JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3456/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 Web Dev 1
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
        </Link>
        <div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4567/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 Web Dev 2
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5678/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 Web Dev 3
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6789/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 Web Dev 4
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/7890/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 Web Dev 5
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
