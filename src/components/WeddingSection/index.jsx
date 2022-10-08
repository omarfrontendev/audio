import React, { useEffect } from 'react'
import Aos from "aos";

import "aos/dist/aos.css";
import './WeddingSection.css'

const WeddingSection = ({ id }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='wedding__section' id={id}>
      <div className="container" data-aos="fade-up">
        <h2 className="section__title tv">Quality Organization Of Turnkey <span>Weddings</span></h2>
        <div className="weddings__media">
          <div>
            <img src="https://images.unsplash.com/photo-1623788452350-4c8596ff40bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1595407753234-0882f1e77954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingSection