import React, { useEffect, useState } from 'react'
import img1 from '../images/shutterstock_204682738.jpg'
import Aos from "aos";
import { TbArrowsDiagonal } from 'react-icons/tb'
import Button from '../UI/Button';
import MainSlider from '../MainSlider';

import "aos/dist/aos.css";
import './OurPhotographyWorks.css'

const OurPhotographyWorks = () => {

  const [all, setAll] = useState(false);
  const [openSlider, setOpenSider] = useState(false);
  const [img, setImage] = useState('');
 
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const works = [
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      img: img1,
      delay: '0'
    },
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2018/06/shutterstock_573749092-400x533.jpg'

    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2018/06/pexels-photo-773471-400x533.jpeg'
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2018/06/pexels-photo-921319-400x533.png'
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2018/06/shutterstock_681617686-400x533.jpg'
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://demo.goodlayers.com/ztudiox/wp-content/uploads/2018/06/shutterstock_568449880-600x800.jpg'
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://demo.goodlayers.com/ztudiox/wp-content/uploads/2018/06/shutterstock_125962484-600x800.jpg'
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://demo.goodlayers.com/ztudiox/wp-content/uploads/2018/06/pexels-photo-25284-600x800.jpg'
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://demo.goodlayers.com/ztudiox/wp-content/uploads/2018/06/pexels-photo-432059-600x800.jpeg'
    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://demo.goodlayers.com/ztudiox/wp-content/uploads/2018/06/shutterstock_122591407-600x800.jpg'
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: img1
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: img1
    },
  ];

  return (
    <>
      <section className='photography__works__section'>
        <div className="ph__works__title" data-aos="fade-right">
          <h2 className="section__title ph">OUR WORKS</h2>
          <p className='ph__works__subtitle'>FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THEOCEAN.</p>
          <Button page='photography'>VIEW ALL WORKS</Button>
        </div>
        <div style={{overflow: 'hidden'}}>
          <div className="works__imgs__container">
            {works.slice(0, `${all ? works.length : 6}`).map(w => (
              <div
                key={w.id}
                className='work__box'
                data-aos="fade-up"
                data-aos-delay={w.delay}
              >
                <img src={w.img} alt="" />
                <div>
                  <button onClick={() => {
                      setOpenSider(prev => !prev)
                      setImage(w.img)
                    }}
                  >
                    <TbArrowsDiagonal className='resize__icon' />
                  </button>
                  <h4>{w.title}</h4>
                  <span>{w.type}</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setAll(prev => !prev)} 
            data-aos="fade-up" 
            data-aos-duration='600' 
            className='load__more__btn'
          >
            {all ? 'LESS' : 'LOAD MORE'}
          </button>
        </div>
      </section>
      {openSlider && <MainSlider img={img} setOpenSider={setOpenSider} />}
    </>
  )
}

export default OurPhotographyWorks