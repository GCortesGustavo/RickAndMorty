import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className={style.sb} >
         <input type='search' onChange={handleChange} value={id} className={style.search} placeholder="Type a number"/>
         <button onClick={() => onSearch(id)} className={style.add}>Add</button> 
      </div>
   );
}
