import { relative } from "path";
import { RiArrowDropDownFill } from "react-icons/ri";
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" style={{marginLeft:"2%", marginRight:"2%"}}>
        <label htmlFor="wd-name" >Assignment Name</label>
        <br />
        <input id="wd-name" value="A1" className="form-control mb-2"/><br />
        <textarea id="wd-description" rows={10} cols={50} className="form-control mb-2">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        
        <br />
        <br />

        <div >
        <div className="d-flex">
            <div className="w-50 pe-5">
                <label htmlFor="wd-points" className="float-end" style={{marginTop:"5px"}}>Points</label>
            </div>
            <div className="w-50 pe-3">
                <input id="wd-points" value={100} className="form-control mb-2"/>
            </div>
        </div>
        <br />

        <div className="d-flex">
            <div className="w-50 pe-5">
            <label htmlFor="wd-group" className="float-end" style={{marginTop:"5px"}}>Assignment Group</label>
            </div>
            <div className="w-50 pe-3" style={{position:"relative"}}>
                <select name="assignment-group" id="wd-group" className="form-control mb-2">
                    <option value="" disabled selected>ASSIGNMENTS</option>
                    <option value="VAL1">Option 1</option>
                    <option value="VAL1">Option 2</option>
                </select>
                <RiArrowDropDownFill className="fs-1" style={{position:"absolute", top:"1%", right:"3%", pointerEvents:"none"}}/>
            </div>
        </div>
        <br />

        <div className="d-flex">
            <div className="w-50 pe-5">
            <label htmlFor="wd-display-grade-as" className="float-end" style={{marginTop:"5px"}}>Display Grade as</label>
            </div>
            <div className="w-50 pe-3" style={{position:"relative"}}>
                <select name="display-grade" id="wd-display-grade-as" className="form-control mb-2">
                    <option value="VAL1">Percentage</option>
                    <option value="VAL1">Option 2</option>
                </select>
                <RiArrowDropDownFill className="fs-1" style={{position:"absolute", top:"1%", right:"3%", pointerEvents:"none"}}/>
            </div>
        </div>
        <br />
        
        <div className="d-flex ps-3 pe-3" >
            <div className="w-50 pe-5">
            <label htmlFor="wd-submission-type" className="float-end" style={{marginTop:"5px"}}>Submission Type</label>
            </div>
            <div className="w-50 border p-3">
                <div style={{position:"relative"}}>
                <select name="submission-type" id="wd-submission-type" className="form-control mb-2">
                    <option value="VAL1">Online</option>
                    <option value="VAL1">Option 2</option>
                </select>
                <RiArrowDropDownFill className="fs-1" style={{position:"absolute", top:"1%", right:"1%", pointerEvents:"none"}}/>
                </div>

                <br />

                <div>
                <label htmlFor="wd-entry-checkbox-type" ><strong>Online Entry Options</strong></label>
                <br />
                <br />
                <input type="checkbox" name="check-entry" id="wd-text-entry" className="form-check-input"/>
                <label htmlFor="wd-text-entry" className="form-check-label ps-3 mb-2">Text Entry</label><br />

                <input type="checkbox" name="check-entry" id="wd-website-url" className="form-check-input"/>
                <label htmlFor="wd-website-url" className="form-check-label ps-3 mb-2">Website URL</label><br/>

                <input type="checkbox" name="check-entry" id="wd-media-recording" className="form-check-input"/>
                <label htmlFor="wd-media-recording" className="form-check-label ps-3 mb-2">Media Recordings</label><br/>

                <input type="checkbox" name="check-entry" id="wd-student-annotation" className="form-check-input"/>
                <label htmlFor="wd-student-annotation" className="form-check-label ps-3 mb-2">Student Annotations</label><br />

                <input type="checkbox" name="check-entry" id="wd-file-upload" className="form-check-input"/>
                <label htmlFor="wd-file-upload" className="form-check-label ps-3">File Uploads</label><br />
                </div>
            </div>
        </div>
        <br />
        
        <div className="d-flex ps-3 pe-3" >
            <div className="w-50 pe-5">
            <label htmlFor="wd-assign-to" className="float-end" style={{marginTop:"5px"}}> Assign</label> 
            </div>
            <div className="w-50 border p-3">
                <div>
                    <label htmlFor="wd-assign-to" className="mb-2"><strong>Assign to</strong></label>
                    <input type="text" id="wd-assign-to" value={"Everyone"} className="form-control mb-2"/>
                </div>

                <br />

                <div>
                    <label htmlFor="wd-due-date" className="mb-2"><strong>Due</strong></label>
                    <input type="date" id="wd-due-date" name="due-date" value="2024-05-13" className="form-control mb-2"/>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-6 mb-2">
                        <label htmlFor="wd-available-from" className="mb-2"><strong>Available From</strong></label>
                        <input type="date" id="wd-available-from" name="available-from" value="2024-05-06" className="form-control mb-2"/>
                    </div>

                    <div className="col-md-6 mb-2">
                        <label htmlFor="wd-due-date" className="mb-2"><strong>Until</strong></label>
                        <input type="date" id="wd-available-until" name="available-until" value="2024-05-24" className="form-control mb-2"/>
                    </div>
                </div>
                
            </div>
        </div>
        <br />
        
        </div>

        <hr />

        <div className="pe-3">
            <button id="wd-assignment-save" className="btn btn-danger float-end">Save</button>
            <button id="wd-assignment-cancel" className="btn btn-secondary float-end me-2">Cancel</button>
        </div>

        </div>

        
        // <table>
        //   <tr>
        //     <td align="right" valign="top" >
        //       <label htmlFor="wd-points">Points</label>
        //     </td>
        //     <td>
        //       <input id="wd-points" value={100} className="form-control mb-2"/>
        //     </td>
        //   </tr>
          
        //   <br />

        //   <tr>
        //     <td align="right" valign="top">
        //       <label htmlFor="wd-group" >Assignment Group</label>
        //     </td>
        //     <td>
        //       <select name="assignment-group" id="wd-group" className="form-control mb-2">
        //         <option value="" disabled selected>ASSIGNMENTS</option>
        //         <option value="VAL1">Option 1</option>
        //         <option value="VAL1">Option 2</option>
        //       </select>
        //     </td>
        //   </tr>
          
        //   <br />

        //   <tr>
        //     <td align="right" valign="top">
        //         <label htmlFor="wd-display-grade-as">Display Grade as</label>
        //         </td>
        //         <td>
        //         <select name="display-grade" id="wd-display-grade-as" className="form-control mb-2">
        //             <option value="VAL1">Percentage</option>
        //             <option value="VAL1">Option 2</option>
        //         </select>
        //     </td>            
        //   </tr>
          
        //   <br />

        //   <tr>
        //     <td align="right" valign="top">
        //         <label htmlFor="wd-submission-type">Submission Type</label>
        //     </td>
        //     <td>
        //         <select name="submission-type" id="wd-submission-type" className="form-control mb-2">
        //             <option value="VAL1">Online</option>
        //             <option value="VAL1">Option 2</option>
        //         </select>
        //     </td>             
        //   </tr>
          
        //   <br />

        //   <tr>
        //     <td></td>
        //     <td>
        //         <label htmlFor="wd-entry-checkbox-type" >Online Entry Options</label>
        //         <br />
        //         <input type="checkbox" name="check-entry" id="wd-text-entry" />
        //         <label htmlFor="wd-text-entry">Text Entry</label><br/>

        //         <input type="checkbox" name="check-entry" id="wd-website-url"/>
        //         <label htmlFor="wd-website-url">Website URL</label><br/>

        //         <input type="checkbox" name="check-entry" id="wd-media-recording"/>
        //         <label htmlFor="wd-media-recording">Media Recordings</label><br/>

        //         <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
        //         <label htmlFor="wd-student-annotation">Student Annotations</label><br />

        //         <input type="checkbox" name="check-entry" id="wd-file-upload"/>
        //         <label htmlFor="wd-file-upload">File Uploads</label>
        //     </td>
        //   </tr>
          
        //   <br />

        //   <tr>
        //     <td align="right" valign="top">
        //         <label htmlFor="wd-assign-to"> Assign</label> 
        //     </td>
        //     <td>
        //         <label htmlFor="wd-assign-to">Assign to</label><br />
        //         <input type="text" id="wd-assign-to" value={"Everyone"} className="form-control mb-2"/>
        //     </td>
        //   </tr>

        
          
        //   <tr>
        //     <td></td>
        //     <td>
        //         <label htmlFor="wd-due-date">Due</label><br />
        //         <input type="date" id="wd-due-date" name="due-date" value="2024-05-13" className="form-control mb-2"/>
        //     </td>
        //   </tr>


        //   <tr>
        //     <td></td>
        //     <td>
        //         <label htmlFor="wd-available-from">Available From</label><br />
        //         <input type="date" id="wd-available-from" name="available-from" value="2024-05-06" className="form-control mb-2"/>
        //     </td>
        //     <td>
        //         <label htmlFor="wd-due-date">Until</label><br />
        //         <input type="date" id="wd-available-until" name="available-until" value="2024-05-24" className="form-control mb-2"/>
        //     </td>
        //   </tr>

        //   {/* Complete on your own */}
        // </table>
        // <hr />
        // <table width="100%">
        //     <tr>
        //         <td align="right">
        //             <button id="wd-assignment-cancel" className="btn btn-secondary">Cancel</button>
        //             <button id="wd-assignment-save" className="btn btn-danger">Save</button>
        //         </td>
        //     </tr>
        // </table>
      
  );}
  