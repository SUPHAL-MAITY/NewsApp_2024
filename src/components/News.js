import React, { useEffect,useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem.js';
import "../styles/News.css"
import InfiniteScroll from "react-infinite-scroll-component"



const News = ({category,country,pageSize}) => {
  const [totalResults, setTotalResults] = useState(0);
  const [articles,setArticles]=useState([])
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(true);



  ////convert the date to local string
  const convertToLocalString=(string)=>{
    const date=new Date(string)
    const convertedString=date.toLocaleDateString()
    return convertedString
 

  }



 

  
  const updateNews=async()=>{
    try {
      setLoading(true)
     
      let {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=794ebfdbb4e54382a0708bc721beaffe&category=${category}&pageSize=${pageSize}&page=${page}`)
      setLoading(false);
      if(data ){
        setTotalResults(data.totalResults)
        setArticles(data.articles)   

      }
     
      
    } catch (error) {
      console.log("Error while getting the data",error)
      
    }

    
  }



  const fetchMoreData=async()=>{
    try {
      setLoading(true)
      
      let {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=794ebfdbb4e54382a0708bc721beaffe&category=${category}&pageSize=${pageSize}&page=${page+1}`)
      setPage(page+1)
      setLoading(false);
      if(data ){
        setTotalResults(data.totalResults)
        setArticles(articles.concat(data.articles))  }
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    updateNews()
  },[totalResults])

 
  let altImgLink="https://media.istockphoto.com/id/157589578/photo/war-headlines-black-and-white-with-vignette.jpg?s=1024x1024&w=is&k=20&c=d-lukNx6-e7OIHDNiM4zhVw3-4eq21O94sdJiB_SF-A="

  return (
    <>
   
   


    {loading &&
        <p style={{ textAlign: 'center' }}>
            <b>Loading.......</b>
        </p>
    }

    <InfiniteScroll
  dataLength={articles.length} 
  next={fetchMoreData}
  hasMore={articles.length !== totalResults}
 
  
  >
    
    <div  className='flex-container'>
    
      <div className="card-container">
          {articles.map((article)=>(
                    <NewsItem  title={article.title.length >60 ?   article.title.substring(0, 60)+ ".......": article.title}  description={ article.description?.length >100 ? article.description.substring(0, 100) + ".......": article.description  }  image={ ! (article && article.urlToImage)? altImgLink : article?.urlToImage} publishedAt={convertToLocalString(article.publishedAt)} url={article.url}  />
                     ////
                )
                )}

      </div>
  
   
    
    </div>

    </InfiniteScroll>
    </>

  )
}

export default News
