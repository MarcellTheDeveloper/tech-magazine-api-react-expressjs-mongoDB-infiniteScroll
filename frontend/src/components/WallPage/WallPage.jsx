import React, { useState, useEffect } from 'react';
//import HeaderWall from './HeaderWall/HeaderWall';
import { InfiniteScroll } from 'libreact/lib/InfiniteScroll';
import axios from 'axios';
import News from './News/News';
import Footer from '../Footer/Footer';
import HeaderLanding from '../LandingPage/HeaderLanding/HeaderLanding';
import LoadingMask from '../LoadingMask/LoadingMask';
import '../../style/CSS/WallPage/highlight.css';
import { v4 as uuidv4 } from 'uuid';

function WallPage() {
  const [articles, setArticles] = useState('');
  const [page, setPage] = useState(1);
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(1);
  const [yesterday, setYesterday] = useState(86400000);
  let today = new Date();

  useEffect(() => {
    if (page % 10 === 0 && page > 0) {
      today = new Date(Date.now() - yesterday);
      setPage(0);
      setRefetch(refetch + 1);
      console.log('date ran');

      //test
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();

      let formatedDate = yyyy + mm + dd;
      axios({
        method: 'POST',
        data: { pageNum: page, date: formatedDate },
        withCredentials: true,
        url: 'http://localhost:8000/',
      }).then((res) => {
        let perChunk = 10; // items per chunk

        let inputArray = res.data;

        let result = inputArray.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / perChunk);

          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
          }

          resultArray[chunkIndex].push(item);

          return resultArray;
        }, []);

        setArticles(result);
      });
      setYesterday(yesterday + 86400000);
    }
  });

  useEffect(() => {
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let formatedDate = yyyy + mm + dd;

    axios({
      method: 'POST',
      data: { pageNum: page, date: formatedDate },
      withCredentials: true,
      url: 'http://localhost:8000/',
    }).then((res) => {
      let perChunk = 10; // items per chunk
      let inputArray = res.data;

      let result = inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      setArticles(result);

      if (articles) {
        articles[0].map((item) => setDisplay((prev) => [...prev, item]));
      }
    });
  }, []);

  const setter = () => {
    setLoading(true);
    setTimeout(function () {
      setPage(page + 1);
      setLoading(false);
    }, 4500);
    if (articles) {
      articles[page].map((item) => setDisplay((prev) => [...prev, item]));
    }
  };

  console.log(display);
  return (
    <>
      {/*<HeaderWall />*/}
      <HeaderLanding />

      <InfiniteScroll hasMore={true} cursor={page} loadMore={setter}>
        <div>
          {display.length !== 0 ? (
            <div className='highlight'>
              {display.map((article, index) => {
                return index <= 10 ? (
                  <div className={`item grid-item-${index}`} key={uuidv4()}>
                    {
                      <>
                        <a href={article.url} target='_blank'>
                          <img
                            className='hightlightImage'
                            src={article.urlToImage}
                            alt='img'
                          />
                        </a>
                        {article.author ? article.author : ''}

                        <a href={article.url} target='_blank'>
                          <h3>
                            {article.title && article.title.length > 73
                              ? `${article.title.slice(0, 73)}...`
                              : article.title}
                          </h3>
                        </a>

                        <p>
                          {article.description &&
                          article.description.length > 200
                            ? `${article.description.slice(0, 200)}...`
                            : article.description}
                        </p>
                      </>
                    }
                  </div>
                ) : (
                  ''
                );
              })}
            </div>
          ) : (
            'Loading...'
          )}

          {display ? (
            <>
              {display.map((article, index) => {
                return index > 10 ? (
                  <News key={uuidv4()} article={article} />
                ) : (
                  ''
                );
              })}
            </>
          ) : (
            ''
          )}
        </div>
      </InfiniteScroll>

      {loading ? (
        <div>
          <LoadingMask />
          {/* <Footer /> */}
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default WallPage;
