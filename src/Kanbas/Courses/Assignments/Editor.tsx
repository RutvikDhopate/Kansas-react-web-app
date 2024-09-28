export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" rows={10} cols={50}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        
        <br />
        <br />

        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select name="assignment-group" id="wd-group">
                <option value="" disabled selected>ASSIGNMENTS</option>
                <option value="VAL1">Option 1</option>
                <option value="VAL1">Option 2</option>
              </select>
            </td>
          </tr>
          
          <br />

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                <select name="display-grade" id="wd-display-grade-as">
                    <option value="VAL1">Percentage</option>
                    <option value="VAL1">Option 2</option>
                </select>
            </td>            
          </tr>
          
          <br />

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select name="submission-type" id="wd-submission-type">
                    <option value="VAL1">Online</option>
                    <option value="VAL1">Option 2</option>
                </select>
            </td>             
          </tr>
          
          <br />

          <tr>
            <td></td>
            <td>
                <label htmlFor="wd-entry-checkbox-type">Online Entry Options</label>
                <br />
                <input type="checkbox" name="check-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-entry" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-entry" id="wd-media-recording"/>
                <label htmlFor="wd-media-recording">Media Recordings</label><br/>

                <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotations</label><br />

                <input type="checkbox" name="check-entry" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          
          <br />

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to"> Assign</label> 
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label><br />
                <input type="text" id="wd-assign-to" value={"Everyone"}/>
            </td>
          </tr>

          <br />
          
          <tr>
            <td></td>
            <td>
                <label htmlFor="wd-due-date">Due</label><br />
                <input type="date" id="wd-due-date" name="due-date" value="2024-05-13"/>
            </td>
          </tr>

          <br />

          <tr>
            <td></td>
            <td>
                <label htmlFor="wd-available-from">Due</label><br />
                <input type="date" id="wd-available-from" name="available-from" value="2024-05-06"/>
            </td>
            <td>
                <label htmlFor="wd-due-date">Due</label><br />
                <input type="date" id="wd-available-until" name="available-until" value="2024-05-24"/>
            </td>
          </tr>

          {/* Complete on your own */}
        </table>
        <hr />
        <table width="100%">
            <tr>
                <td align="right">
                    <button id="wd-assignment-cancel">Cancel</button>
                    <button id="wd-assignment-save">Save</button>
                </td>
            </tr>
        </table>
      </div>
  );}
  