import React, {useEffect, useState} from 'react'
import database from './config/Appwrite'
import Card from './Card';

function Projects() {
  const [datas, setDatas] = useState();

  async function fetchData() {
    setDatas(await database.listDocuments(
      '6665e0c000022b7af138', 
      '6665e0e3000fba355946', 
      []
    ))
  }

  useEffect(() => fetchData, [])
  return (
    <div className='Projects page'>
      <h2 className="header color-purple">projects</h2>
      <div className="container">
        {
          datas && datas["documents"].map((value, key) => {
            return <Card key={key} title={value.title} codeLink={value.code_link} previewLink={value.preview_link}/>
          })
        }
      </div>
    </div>
  )
}

export default Projects;
