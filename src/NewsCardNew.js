import React from "react";

export default function NewsCardNew({article}) {
    console.log("Article Data:",article)
  return (
    <div className="max-w-sm mx-8 my-4 p-4 shadow-md rounded-md bg-white">
      <img src={article.urlToImage} className="h-72" />
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p>
       {article.description}
        </p>
      <p className="font-bold text-xl my-3">{article.author}</p>
      <a href={article.url} target=" _blank">
      go to main artical
      </a>
    </div>
  );
}
