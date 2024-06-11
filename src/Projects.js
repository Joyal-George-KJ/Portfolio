// Projects.js
import React, { useEffect, useState } from 'react';
import database from './config/Appwrite';
import Card from './Card';

function Projects() {
  const [datas, setDatas] = useState(null); // Initialize with null to handle loading state

  async function fetchData() {
    try {
      const response = await database.listDocuments(
        '6665e0c000022b7af138', // Replace with your database ID
        '6665e0e3000fba355946', // Replace with your collection ID
        []
      );
      setDatas(response.documents); // Access the documents property directly
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='Projects page'>
      <h2 className="header color-purple">projects</h2>
      <div className="container">
        {
          datas ? (
            datas.map((value, key) => (
              <Card key={key} title={value.title} codeLink={value.code_link} previewLink={value.preview_link} />
            ))
          ) : (
            <p>Loading...</p> // Show a loading state
          )
        }
      </div>
    </div>
  );
}

export default Projects;