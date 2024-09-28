export default function Modules() {
    return (
      <div>
        <button>Collapse All</button><button>View Progress</button>
        <select><option value="VAL1">Publish All</option>
        <option value="VAL2">Temp Option</option>
        </select><button>+ Module</button>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul>
                    <li>Full Stack Developer - Chapter 1 - Introduction</li>
                    <li>Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul>
                    <li>Introduction to Web Development</li>
                    <li>Creating an HTTP Server with Node.js</li>
                    <li>Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deplot the assignment to Netlify</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul>
                    <li>Introduction to HTML and the DOM</li>
                    <li>Formatting Web Content with Headings and</li>
                    <li>Formatting content with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  