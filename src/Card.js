import React from 'react';

function Card({ title, codeLink, previewLink }) {
  const alertMessage = (msg) => {
    alert(msg);
  };

  return (
    <div className="project">
      <div className="info">
        <p className="title color-purple">{title}</p>
        <p className="links color-purple">
          <a href={codeLink} className='link color-purple'>View Code</a> | 
          <a href={previewLink || '#'} onClick={() => !previewLink && alertMessage('Preview unavailable')} className='link color-purple'>
            Preview
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
