// import React from 'react'
// import '../../App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// function SignUp() {
//   return (
//     <>
//         <h1 className='signup'>sign up</h1>
       
//     </>
//   )
// }

// export default SignUp
import React, { useState } from 'react';
import '../../App.css';

const SignUp = () => {
  const PAGE_WIDTH = 800; // Adjust the width as needed
  const PAGE_HEIGHT = 1200; // Adjust the height as needed
  const PAGE_MARGIN = 50; // Adjust the margin as needed
  const PAGE_PADDING = 20; // Adjust the padding as needed
   

  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const getPageStyle = () => {
    return {
      width: '${PAGE_WIDTH}px',
      height:' ${PAGE_HEIGHT}px',
      margin:' ${PAGE_MARGIN}px',
      padding:' ${PAGE_PADDING}px',
      border: '1px solid #ccc',
      overflow: 'hidden',
      overflowWrap: 'break-word',
    };
  };

  const renderPages = () => {
    const lines = content.split('\n');
    const pages = [];

    let currentPage = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const tempPage = currentPage === '' ? line : currentPage + '\n' + line;

      if (getLinesHeight(tempPage) <= PAGE_HEIGHT - PAGE_PADDING) {
        currentPage = tempPage;
      } else {
        pages.push(currentPage);
        currentPage = line;
      }

      if (i === lines.length - 1) {
        pages.push(currentPage);
      }
    }

    return pages.map((page, index) => (
      <div key={index} style={getPageStyle()} />
    ));
  };

  const getLinesHeight = (text) => {
    const lineHeight = 20; // Adjust the line height as needed
    const lines = text.split('\n');
    return lines.length * lineHeight;
  };

  return (
    <div>
    <h1 className='planning-header'>planning here</h1>
      <textarea className='my-text-area'
        value={content}
        onChange={handleInputChange}
     style={{
    width: `${PAGE_WIDTH}px`,
    fontSize: '25px', // Adjust the font size as needed
    lineHeight: '1.5', // Adjust the line spacing as needed
    width:'2200px',
  }}
      />

      <div className="pages-container">{renderPages()}</div>
    </div>
  );
};

export default SignUp;