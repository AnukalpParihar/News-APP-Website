import React, { useEffect, useState } from "react";
import NewsCardNew from "./NewsCardNew";

export default function App() {
  // const [news,setNews] = useState([])
  // const [loading,setLoading] = useState(true)

  // useEffect(() => {
  //   getNewsFromApi()
  // }, [])

  // const getNewsFromApi = async () => {
  //     const res = await fetch(' https://newsapi.org/v2/top-headlines?country=in&apiKey=e70dffcac4be47f4b26b273e14766004')
  //     const data = await res.json()
  //     setNews(data.articles)
  //     setLoading(false)
  //     console.log(news)
  // }

  const [news, setNews] = useState([]);

  const [loading,setLoading] = useState(true);

  useEffect(() => {
    getNewsData();
  },[]);

  const getNewsData = async () => {
    console.log("Getting News");
    // console.log(fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e70dffcac4be47f4b26b273e14766004'))
    const apiResponse = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e70dffcac4be47f4b26b273e14766004"
    );
    const data = await apiResponse.json();
    setNews(data.articles);
    setLoading(false)
    console.log(news)
  
  };

  return (
    <div className="bg-neutral-100	 min-h-screen p-8 flex flex-wrap">
     
     

      {loading? "Loading data":  news.map((article)=>{return(<NewsCardNew article={article}/>)})}

    </div>
  );
}
