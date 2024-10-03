import { FaSearch } from "react-icons/fa";
import '../../styles.css';
export default function AssignmentControls() {
    return (
        <div>
            <div className="search-box-container me-1">
                <FaSearch className="search-icon fs-3"/>        
                <input id="wd-search-assignment" type="search"
                    placeholder="Search..." className="search-input"/>
            </div>

        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
            + Assignment
        </button>
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
            + Group
        </button>
        </div>
    )
}