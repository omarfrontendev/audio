import React, { useEffect } from 'react'
import Button from '../UI/Button'
import { MicIcon } from '../UI/icons'
import Aos from "aos";

import "aos/dist/aos.css";
import './QualitySoundSection.css'

const QualitySoundSection = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='quality__section' data-aos="fade-up">
      <div className="quality__content">
        <div className="quality__left__col">
          <h2 className="quality__title">
            Need a <span>QUALITY</span> Sound?
          </h2>
          <p className='quality__subtitle'>
            We deliver the very best service and amenities signed artists and independent musicians.
          </p>
        </div>
        <div className="quality__rigth__col">
          <Button>
            <div className="quality__btn">
              <MicIcon /> book session now
            </div>
          </Button>
          <p className="qulaty__rigth__text">
          And get a one recording hour for <span>FREE</span>*
          </p>
        </div>
      </div>
    </section>
  )
}

export default QualitySoundSection