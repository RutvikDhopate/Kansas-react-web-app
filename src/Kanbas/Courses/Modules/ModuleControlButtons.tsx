import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <button className="border-0 bg-transparent"><BsPlus /></button>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
