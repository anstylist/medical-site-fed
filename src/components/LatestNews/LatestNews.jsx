import React from 'react'
import './LatestNews.scss'

const img1 =
  'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393385/medical-site/blog-1_ldivdo.jpg'
const img2 =
  'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393385/medical-site/blog-2_x1buxn.jpg'
const img3 =
  'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393386/medical-site/blog-3_nlg0jh.jpg'

const latestNewsData = [
  {
    id: 1,
    image: img1,
    postedBy: 'Admin',
    date: 'August 15, 2022',
    title: 'Why medical treatment is needed if there is a physical problem'
  },
  {
    id: 2,
    image: img2,
    postedBy: 'Admin',
    date: 'August 14, 2022',
    title: 'The success of treatment of stroke patients raises new hopes'
  },
  {
    id: 3,
    image: img3,
    postedBy: 'Admin',
    date: 'August 13, 2022',
    title: 'A doctor may be needed for a variety of treatments'
  }
]

const LatestNews = () => {
  return (
    <>
      <div className="latest-news__header">
        <span className="latest-news__header-span">Recent articles</span>
        <h1 className="latest-news__header-h1">Our latest news</h1>
      </div>
      <div className="latest-news">
        {latestNewsData.map((news) => (
          <div className="latest-news__card" key={news.id}>
            <a className="latest-news__link" href="#">
              <div className="latest-news__image-container">
                <img
                  className="latest-news__image"
                  src={news.image}
                  alt="Article"
                />
                <p className="latest-news__date">{news.date}</p>
              </div>
              <div className="latest-news__content">
                <p className="latest-news__posted-by">
                  Posted by {news.postedBy}
                </p>
                <h3 className="latest-news__title">{news.title}</h3>
                <p className="latest-news__read-more">Read more</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default LatestNews
