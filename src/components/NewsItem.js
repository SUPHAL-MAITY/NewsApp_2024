import React from 'react'
import "../styles/NewsItem.css"

const NewsItem = ({title,description,image,publishedAt,url}) => {




  return (
    <div className='card'>
        <div className='card-body'>
          
          <img src={image} alt="Girl in a jacket" width="90%" height="230px"/>

        </div>
        <div className='card-title'>
          <p>{title}</p>

        </div>
        <div className='card-desc'>
          <p>{description}</p>

        </div>
        <div className='card-meta'>
          <p>Published at: {publishedAt}</p>

        </div>
        <a href={url}>
        <button>Read More</button>

        </a>
        
    
    </div>
  )
}

export default NewsItem
