import React from 'react';
import '../../../style/CSS/WallPage/News/news.css';

function News({ article }) {
  return (
    <div className='news'>
      <div className='container'>
        <div className='news-img'>
          <img src={article.urlToImage} alt='' />
        </div>
        <div className='news-text'>
          <a href={article.url} target='_blank'>
            <h3>
              {article.title && article.title.length > 90
                ? `${article.title.slice(0, 90)}...`
                : article.title}
            </h3>
          </a>
          <p>
            {article.description && article.description.length > 190
              ? `${article.description.slice(0, 190)}...`
              : article.description}
          </p>
          <p>{article.author}</p>
        </div>
      </div>
    </div>
  );
}

export default News;
