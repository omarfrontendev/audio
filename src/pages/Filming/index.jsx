import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import MovieCard from '../../components/MovieCard'
import Button from '../../components/UI/Button'
import WeddingSection from '../../components/WeddingSection'
import Logo from '../../components/images/tvwhite.png'
import Aos from "aos";

import "aos/dist/aos.css";
import './Filming.css'

const Filming = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
    window.scrollTo(0,0);
  }, []);

  const movies = [
    {
      id: 1,
      img: 'https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg',
      name: 'Inside Women',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Action',
      desc: 'That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town’s twisted secrets.'
    },
    {
      id: 2,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide03.jpg',
      name: 'Future Hell',
      rating: 8.6,
      date: 2020,
      duration: '1hr 33min',
      category: 'Action - Adventure - Comedy - Romance',
      desc: "Based on Edgar Allan Poe's classic bone-chilling tale, this bloody story will have you sleeping with the lights on for years to come. Nine year-old orphan"
    },
    {
      id: 3,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide02.jpg',
      name: 'Soviet : The Cold War',
      rating: 7.3,
      date: 2019,
      duration: '1hr 45min',
      category: 'War',
      desc: 'Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the'
    },
  ];

  const music = [
    {
      id: 1,
      img: 'https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 2,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook14.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 3,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook13.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 4,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook12.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 5,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook11.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 6,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook10.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 7,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook15.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 8,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook14.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 9,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook13.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    },
    {
      id: 10,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2021/04/audiobook12.jpeg',
      name: 'To Kill a Fae',
      rating: 7.1,
      type: 'DOLBY SURROUND'
    }
  ];

  const allMovies = [
    {
      id: 1,
      img: 'https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg',
      name: 'Inside Women',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Action',
      desc: 'That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town’s twisted secrets.'
    },
    {
      id: 2,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide03.jpg',
      name: 'Future Hell',
      rating: 8.6,
      date: 2020,
      duration: '1hr 33min',
      category: 'Action - Adventure - Comedy - Romance',
      desc: "Based on Edgar Allan Poe's classic bone-chilling tale, this bloody story will have you sleeping with the lights on for years to come. Nine year-old orphan"
    },
    {
      id: 3,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide02.jpg',
      name: 'Soviet : The Cold War',
      rating: 7.3,
      date: 2019,
      duration: '1hr 45min',
      category: 'War',
      desc: 'Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the'
    },
    {
      id: 4,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide01.jpg',
      name: 'Inside Women',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Action',
      desc: 'That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town’s twisted secrets.'
    },
    {
      id: 5,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide03.jpg',
      name: 'Future Hell',
      rating: 8.6,
      date: 2020,
      duration: '1hr 33min',
      category: 'Action - Adventure - Comedy - Romance',
      desc: "Based on Edgar Allan Poe's classic bone-chilling tale, this bloody story will have you sleeping with the lights on for years to come. Nine year-old orphan"
    },
    {
      id: 6,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide02.jpg',
      name: 'Soviet : The Cold War',
      rating: 7.3,
      date: 2019,
      duration: '1hr 45min',
      category: 'War',
      desc: 'Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the'
    },
    {
      id: 7,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide03.jpg',
      name: 'Future Hell',
      rating: 8.6,
      date: 2020,
      duration: '1hr 33min',
      category: 'Action - Adventure - Comedy - Romance',
      desc: "Based on Edgar Allan Poe's classic bone-chilling tale, this bloody story will have you sleeping with the lights on for years to come. Nine year-old orphan"
    },
    {
      id: 8,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide02.jpg',
      name: 'Soviet : The Cold War',
      rating: 7.3,
      date: 2019,
      duration: '1hr 45min',
      category: 'War',
      desc: 'Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the'
    },
  ];

  const headerLinks = [
    {
      id: 1,
      text: 'Weddings',
      section: 'wedding' 
    },
    {
      id: 2,
      text: 'Music',
      section: 'music' 
    },
    {
      id: 3,
      text: 'Movies',
      section: 'movies' 
    }
  ];

  return (
    <div className='tv__page'>
      <Header page='tv' logo={Logo} links={headerLinks} />
      <HeroSection page='tv' data={movies} />
      <WeddingSection id='wedding' />
      <section className='filming__section movies' id='movies'>
        <div className="container">
          <h2 className='section__title tv'>Watch <span>Movies</span></h2>
          <div className="cards__container" data-aos="fade-up">
            {allMovies.map(m => (
              <MovieCard 
                key={m.id}
                img={m.img}
                name={m.name}
                rating={m.rating}
                date={m.date}
                category={m.category}
              />
            ))}
          </div>
          <Button page='tv'>Show All Movies</Button>
        </div>
      </section>  
      <section className='filming__section' id='music'>
        <div className="container">
          <h2 className='section__title tv'>Listen And Watch <span>Music</span></h2>
          <div className="cards__container" data-aos="fade-up">
            {music.map(m => (
              <MovieCard 
                key={m.id}
                img={m.img}
                name={m.name}
                rating={m.rating}
                type={m.type}
                music={true}
              />
            ))}
          </div>
          <Button page='tv'>Show All Music</Button>
        </div>
      </section>
      <Footer type='TV/FILM' links={headerLinks} />
    </div>
  )
}

export default Filming