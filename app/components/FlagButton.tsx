'use client';

import { useState } from "react";


export default function FlagButton() {

const [isFlagged, setIsFlagged] = useState(false); 

        const handleClick = () => {
            console.log("Flag button clicked");
        };

  return (
    <button
      onClick = {() => setIsFlagged(prev => !prev)}

      className={isFlagged ? "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
        : "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}
    >
      Flag
    </button>
  );
}