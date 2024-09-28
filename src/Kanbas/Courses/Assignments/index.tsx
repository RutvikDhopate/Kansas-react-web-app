export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <div>
                <span>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00 am | <strong>Due</strong> May 13 at 12:00 am | 100 pts</span>
            </div>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/456">
              A2 - CSS + REACT
            </a>
            <div>
                <span>Multiple Modules | <strong>Not available until</strong> May 13 at 12:00 am | <strong>Due</strong> May 20 at 11:59 pm | 100 pts</span>
            </div>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/789">
              A3 - JAVA + HTML
            </a>
            <div>
                <span>Multiple Modules | <strong>Not available until</strong> May 20 at 12:00 am | <strong>Due</strong> May 27 at 11:59 pm | 100 pts</span>
            </div>
          </li>
        </ul>
      </div>
  );}
  