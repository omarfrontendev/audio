import React, { useEffect } from "react";
import VoicerImage from "../images/img-video.png";
import { FaPlay } from "react-icons/fa";
import Aos from "aos";

import "aos/dist/aos.css";
import "./VoicerSection.css";

const VoicerSection = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="voicer__section">
      <div className="left__col" data-aos="fade-up">
        <div className="overlay__bgk">
         
        </div>
        <h3 className="section__title">Welcome to Audio</h3>
        <p className="voicer__prag">
          The Voicer is the brainchild of musicians who understandthat the best
          art comesfrom the best environment
        </p>
        <p className="voicer__prag__last">
          They know that to make great music, you need great surroundings — a
          combination of top-notch gear, comfortable work and lounge areas, a
          relaxing setting, and knowledgeable, capable staff who can work with
          artists of any level. A place without distractions, yet accessible,
          where development is encouraged and prices aren’t prohibitive, but
          quality isnever sacrificed and clients are treated with respect.
        </p>
      </div>
      <div className="rigth__col" data-aos="fade-left">
        <img src={VoicerImage || ''} alt="" />
        <div className="play__icon__container">
          <div className="play__icon__container__play__icon">
            <FaPlay className="play__icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoicerSection;
