import React, { useEffect } from 'react'
import Aos from "aos";

import "aos/dist/aos.css";
import './PhotographyBlogs.css'

const PhotographyBlogs = () => {

  const blogs = [
    {
      id: 1,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/06/shutterstock_259427588-400x257.jpg',
      title: 'SIGMA 16MM F/1.4 FOR MICRO FOUR-THIRDS CAPTURES THE ARTISTIC VIEW OF THE WORLD',
      date: 'JUNE 6, 2016'
    },
    {
      id: 2,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/06/shutterstock_445094317-400x257.jpg',
      title: '4 REASONS WHY YOU SHOULD CONSIDER GETTING AN OFFICE OUT FROM YOUR HOME',
      date: 'JUNE 6, 2016'
    },
    {
      id: 3,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/06/shutterstock_553468870-400x257.jpg',
      title: 'HASSELBLAD 1.21 FIRMWARE UPDATE FOR X1D AND H6D CAMERAS',
      date: 'JUNE 6, 2016'
    },
  ];

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='photography__blogs'>
      <div className="container">
        <h2 data-aos="fade-up" className="section__title ph">BLOG</h2>
        <p data-aos="fade-up" className='section__subtitle'>ARTICLE, NEWS, TIPS</p>
        <div className="blogs__container">
          {blogs.map((b, i) => (
            <div 
              key={b.id}
              className='blog__box'
              data-aos="fade-up"
              data-aos-delay={`${i}00`}
            >
              <div>
                <img src={b.img} alt="" />
              </div>
              <h3><span>{b.title}</span></h3>
              <span>{b.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotographyBlogs