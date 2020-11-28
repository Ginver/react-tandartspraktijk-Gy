import React from 'react';

function PageHeader({ icon, title }) {
  return (
    <div className="title-container">
      <img src={icon} alt={title} />
      <h1>{title}</h1>
    </div>
  );
}

export default PageHeader;