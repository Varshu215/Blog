import './write.css';
// import React, { useEffect } from 'react';
export default function Write() {
   
  return (
   <>
   <center>
    <textarea id="review" name="review" rows="30" cols="100" placeholder='      Share your Thoughts'>
</textarea><br/><br/>
<button className="submit" onClick={()=>alert("Thank you !!")}>Submit</button>
</center>
</>
  )
}
