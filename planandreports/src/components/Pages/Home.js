import React from 'react'
import '../../App.css'
function Home() {
  return (
<>
    <h1 className='home'>Home</h1>
</>
  )
}

export default Home
// import React, { useState } from 'react';

// function Home() {
//   const [content, setContent] = useState('');

//   const handleContentChange = (e) => {
//     const updatedContent = e.target.textContent;
//     setContent(updatedContent);
//   };

//   return (
//     <div>
//       <div
//         contentEditable
//         style={{
//           border: '1px solid #ccc',
//           minHeight: '700px',
//           padding: '10px',
//           direction: 'ltr', // Set to 'ltr' for left-to-right text direction
//           textAlign: 'left', // Align the text to the right
//         }}
//         onInput={handleContentChange}
//       >
//         {content}
//       </div>
//     </div>
//   );
// }

// export default Home;
