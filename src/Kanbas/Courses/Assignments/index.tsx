import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { RiArrowDropDownFill } from "react-icons/ri";
export default function Assignments() {
    return (
      <div id="wd-assignments" style={{marginLeft:"20px", marginRight:"20px"}}>
        <AssignmentControls/><br /><br /><br />
        <ul id="wd-assignment-title" className="list-group rounded-0">
            <li className="wd-assignment-title list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-assignment-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-1 fs-3"/>
                <RiArrowDropDownFill className="me-2 fs-1" type="button"/>
                ASSIGNMENTS
                <IoEllipsisVertical className="float-end fs-3"/>
                <button className="float-end" style={{ border: "none", background: "none", outline: "none" }}>+</button>
                <span className="float-end" style={{marginRight:"20px"}}><button style={{ borderRadius: "10px"}}>40% of Total</button></span>
            </div>
            <ul className="wd-assignment-list list-group rounded-0">
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">
                    <AssignmentControlButtons/>
                    <div style={{marginLeft:"75px"}}>
                        <a className="wd-assignment-link text-black"
                            href="#/Kanbas/Courses/1234/Assignments/123"
                            style={{textDecoration:"none"}}>
                            <strong>A1</strong>
                        </a>
                        <br/>
                        <span><a className="wd-modules-list-link text-danger"
                            href="https://www.google.com" style={{textDecoration:"none"}}>Multiple Modules</a> | <strong>Not available until</strong> May 6 at 12:00 am | </span>
                        <br />
                        <span>
                            <strong>Due</strong> May 13 at 11:59 pm | 100 pts
                        </span>
                    </div>
                </li>
            </ul>

            <ul className="wd-assignment-list list-group rounded-0">
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">
                    <AssignmentControlButtons/>
                    <div style={{marginLeft:"75px"}}>
                        <a className="wd-assignment-link text-black"
                            href="#/Kanbas/Courses/1234/Assignments/123"
                            style={{textDecoration:"none"}}>
                            <strong>A2</strong>
                        </a>
                        <br/>
                        <span><a className="wd-modules-list-link text-danger"
                            href="https://www.google.com" style={{textDecoration:"none"}}>Multiple Modules</a> | <strong>Not available until</strong> May 13 at 12:00 am | </span>
                        <br />
                        <span>
                            <strong>Due</strong> May 20 at 11:59 pm | 100 pts
                        </span>
                    </div>
                </li>
            </ul>

            <ul className="wd-assignment-list list-group rounded-0">
                <li className="wd-assignment-link list-group-item p-3 ps-1 wd-lesson">
                    <AssignmentControlButtons/>
                    <div style={{marginLeft:"75px"}}>
                        <a className="wd-assignment-link text-black"
                            href="#/Kanbas/Courses/1234/Assignments/123"
                            style={{textDecoration:"none"}}>
                            <strong>A3</strong>
                        </a>
                        <br/>
                        <span><a className="wd-modules-list-link text-danger"
                            href="https://www.google.com" style={{textDecoration:"none"}}>Multiple Modules</a> | <strong>Not available until</strong> May 20 at 12:00 am | </span>
                        <br />
                        <span>
                            <strong>Due</strong> May 27 at 11:59 pm | 100 pts
                        </span>
                    </div>
                </li>
            </ul>

            </li>
        </ul>
      </div>
  );}
  