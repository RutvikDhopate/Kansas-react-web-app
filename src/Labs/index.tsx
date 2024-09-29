import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1> Rutvik Dhopate</h1>
      <h2> Section 2</h2>
      <h3> Source Code</h3>
        Please click here 
        <a id="wd-github-src" href="https://github.com/RutvikDhopate/Kansas-react-web-app/tree/main/src">Source Code</a>
        to check out the GitHub Source Code for Labs and Kanbas.<br/>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
);}
