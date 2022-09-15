import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Aos from "aos";

import "aos/dist/aos.css";
import "./VoicerSection.css";

const VoicerSection = ({ data, page }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <section className={`voicer__section ${page === 'photography' ?  'ph': ''}`}>
      <div className="left__col" data-aos="fade-up">
        <div className="overlay__bgk">
         
        </div>
        <h3 className={`section__title ${page === 'photography' ?  'ph': ''}`}>{data.title}</h3>
        <p className="voicer__prag">{data.subtitle}</p>
        <p className="voicer__prag__last">
          {data.text}
        </p>
      </div>
      <div className="rigth__col" data-aos="fade-left">
        <img src={data.img || ''} alt="" />
        {page !== 'photography' && <div className="play__icon__container">
          <div className="play__icon__container__play__icon">
            <FaPlay className="play__icon" />
          </div>
        </div>}
      </div>
    </section>
  );
};

export default VoicerSection;
