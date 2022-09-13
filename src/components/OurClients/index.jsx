import React, { useEffect, useState } from 'react'
import Aos from "aos";

import "aos/dist/aos.css";
import './OurClients.css'

const OurClients = () => {

  const [showClient, setShowClient] = useState('');

  const clients = [
    {
      id: 1,
      client: 'Michael Earle'
    },
    {
      id: 2,
      client: 'Beverly Pleasants'
    },
    {
      id: 3,
      client: 'Louis Shay'
    },
    {
      id: 4,
      client: 'Stephen Rivers'
    },
    {
      id: 5,
      client: 'Michael Earle'
    },
    {
      id: 6,
      client: 'Roger Hoehne'
    },
    {
      id: 7,
      client: 'Ben Worrell'
    },
    {
      id: 8,
      client: 'Orville Thompson'
    },
    {
      id: 9,
      client: 'Michael Earle'
    },
    {
      id: 10,
      client: 'Thomas Elliott'
    },
    {
      id: 11,
      client: 'Michael Earle'
    },
    {
      id: 12,
      client: 'Lois Olson'
    },
    {
      id: 13,
      client: 'Angela Hunley'
    },
    {
      id: 14,
      client: 'Michael Earle'
    },
    {
      id: 15,
      client: 'Beverly Pleasants'
    },
    {
      id: 16,
      client: 'Michael Earle'
    },
    {
      id: 17,
      client: 'Rickey Campbell'
    },
    {
      id: 18,
      client: 'Michael Earle'
    },
    {
      id: 19,
      client: 'Rickey Campbell'
    },
    {
      id: 20,
      client: 'Michael Earle'
    },
    {
      id: 21,
      client: 'George Norsworthy'
    },
    {
      id: 22,
      client: 'George Norsworthy'
    },
    {
      id: 23,
      client: 'Michael Earle'
    },
    {
      id: 24,
      client: 'George Norsworthy'
    },
    {
      id: 25,
      client: 'Michael Earle'
    },
    {
      id: 26,
      client: 'George Norsworthy'
    },
    {
      id: 27,
      client: 'Michael Earle'
    },
    {
      id: 28,
      client: 'Jane Wilcher'
    },
    {
      id: 29,
      client: 'Michael Earle'
    },
  ];

  useEffect(() => {
    setShowClient(clients[0].client)
    Aos.init({ duration: 1000 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='clients__page'>
      <div className="container">
        <h2 data-aos="fade-up" className='section__title'>Our Clients</h2>
        <div data-aos="fade-up" className='box__of__client__name'><span>{showClient}</span></div>
        <div className="clients__container">
          {clients.map(client => (
            <div 
              key={client.id} 
              className='single__client'
              onMouseEnter={() => setShowClient(client.client)}
              onClick={() => setShowClient(client.client)}
              data-aos="fade-up"
            >
              {client.client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClients