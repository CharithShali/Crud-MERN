import React from 'react'
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

const List = ({ id, task, setUpdateUI, updateMode }) => {
  return (
    <li>
    {task}
    <div className="icon_holder">
      <BiEditAlt className="icon" onClick={() => updateMode(id, task)} />
      <BsTrash className="icon" />
    </div>
  </li>
  )
}

export default List