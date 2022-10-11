import React from 'react'
import { useState } from 'react'
import FormBox from '../FormBox'

import './DistributionForm.css'

const DistributionForm = ({ type, details, data, setData, src, setSrc, setVideo, video }) => {

  const [selectAll, setSelectAll] = useState(false)

  const stores = [
    {
      value: 'rn_direct',
      text: 'RN Direct',
      img: 'https://www.routenote.com/rn/img/icon7.png'
    },
    {
      value: 'iTunes__&__Apple Music',
      text: 'iTunes & Apple Music',
      img: 'https://www.routenote.com/rn/img/icon1.png'
    },
    {
      value: 'amazon',
      text: 'Amazon',
      img: 'https://www.routenote.com/rn/img/Amazon_Store_Icon.png'
    },
    {
      value: 'eMUSIC',
      text: 'eMUSIC',
      img: 'https://www.routenote.com/rn/img/icon3.png'
    },
    {
      value: 'Spotify',
      text: 'Spotify',
      img: 'https://www.routenote.com/rn/img/icon4.png'
    },
    {
      value: 'youTube__music',
      text: 'YouTube Music',
      img: 'https://www.routenote.com/rn/img/youtube-music-manage-stores-icon.png'
    },
    {
      value: 'anghami',
      text: 'Anghami',
      img: 'https://www.routenote.com/rn/img/anghami.png'
    },
    {
      value: 'deezer',
      text: 'Deezer',
      img: 'https://www.routenote.com/rn/img/icon16.png'
    },
    {
      value: 'WiMp/Tidal',
      text: 'WiMp/Tidal',
      img: 'https://www.routenote.com/rn/img/wimp.png'
    },
    {
      value: 'Claro-musica',
      text: 'Claro-musica',
      img: 'https://www.routenote.com/rn/img/claro.png'
    },
    {
      value: 'Nuuday',
      text: 'Nuuday',
      img: 'https://www.routenote.com/rn/img/nuuday_manage_store.png'
    },
    {
      value: 'SoundCloud',
      text: 'SoundCloud',
      img: 'https://www.routenote.com/rn/img/soundcloud-logo_360.png'
    },
    {
      value: 'Gracenote',
      text: 'Gracenote',
      img: 'https://www.routenote.com/rn/img/Gracenote_logo.png'
    },
    {
      value: 'Kanjian',
      text: 'Kanjian',
      img: 'https://www.routenote.com/rn/img/kanjianlogo.png'
    },
    {
      value: 'Pandora',
      text: 'Pandora',
      img: 'https://www.routenote.com/rn/img/pandora-icon.png'
    },
    {
      value: 'Napster',
      text: 'Napster',
      img: 'https://www.routenote.com/rn/img/Napster_Manage_Stores.png'
    },
    {
      value: 'Melon',
      text: 'Melon',
      img: 'https://www.routenote.com/rn/img/Melonicon.jpg'
    },
    {
      value: 'iHeartRadio',
      text: 'iHeartRadio',
      img: 'https://www.routenote.com/rn/img/rn_iHeartRadio.png'
    },
    {
      value: '7Digital',
      text: '7Digital',
      img: 'https://www.routenote.com/rn/img/7Digital.png'
    },
    {
      value: 'Saavn',
      text: 'Saavn',
      img: 'https://www.routenote.com/rn/img/Jiosaavn_ManageStores.jpg'
    },
    {
      value: 'Bugs!',
      text: 'Bugs!',
      img: 'https://www.routenote.com/rn/img/Bugs_ManageStores.png'
    },
    {
      value: 'Facebook',
      text: 'Facebook',
      img: 'https://www.routenote.com/rn/img/FaceInsta_ManageStores.png'
    },
    {
      value: 'VIBE',
      text: 'VIBE',
      img: 'https://www.routenote.com/rn/img/vibe-manage-stores.png'
    },
    {
      value: 'Netease',
      text: 'Netease',
      img: 'https://www.routenote.com/rn/img/NetEaseManageStores.png'
    },
    {
      value: 'Tencent',
      text: 'Tencent',
      img: 'https://www.routenote.com/rn/img/Tencent_ManageStores.jpg'
    },
    {
      value: 'AWA',
      text: 'AWA',
      img: 'https://www.routenote.com/rn/img/AWA_ManageStores.jpg'
    },
    {
      value: 'TikTok',
      text: 'TikTok',
      img: 'https://www.routenote.com/rn/img/tiktok-manage-logo.png'
    },
    {
      value: 'Kuack Media',
      text: 'Kuack Media',
      img: 'https://www.routenote.com/rn/img/Bugs_ManageStores.png'
    },
    {
      value: 'Qobuz',
      text: 'Qobuz',
      img: 'https://www.routenote.com/rn/img/Qobuz_ManageStores.jpg'
    },
    {
      value: 'FLO',
      text: 'FLO',
      img: 'https://www.routenote.com/rn/img/Flo-manage.png'
    },
    {
      value: 'KKBOX',
      text: 'KKBOX',
      img: 'https://www.routenote.com/rn/img/kkbox-manage-stores.png'
    },
    {
      value: 'Zing MP3',
      text: 'Zing MP3',
      img: 'https://www.routenote.com/rn/img/zing-manage-stores.png'
    },
    {
      value: 'Joox',
      text: 'Joox',
      img: 'https://www.routenote.com/rn/img/joox-manage-stores.png'
    },
    {
      value: 'Hungama',
      text: 'Hungama',
      img: 'https://www.routenote.com/rn/img/hungama-manage-stores.png'
    },
    {
      value: 'YouTube',
      text: 'YouTube',
      img: 'https://www.routenote.com/rn/img/youtube-icon.png'
    },
  ];

  const selectBox = e => {
    setSelectAll(false)
    if(e.target.checked) {
      setData({...data, stores: [...data.stores, e.target.value]})
    }else {
      const arr = data.stores.filter(i => i !== e.target.value)
      setData({...data, stores: arr})
    }
  }

  const selectAllHanderl = e => {
    const arr = [];
    if(e.target.checked) {
      setData({...data, stores: []})
      stores.map(story => {
        arr.push(story.value)
      })
      setSelectAll(true)
    }else {
      setSelectAll(false)
      setData({...data, stores: []})
    }
    setData({...data, stores: arr})
  }

  return (
    <form className='distribution__form' onSubmit={e => {
      e.preventDefault();
      console.log(data);
    }}>
      {details.map(box => (
        <FormBox
          type={type}  
          key={box.id} 
          title={box.title} 
          inputs={box.resources} 
          data={data} 
          setData={setData}
          src={src} 
          setSrc={setSrc}
          setVideo={setVideo}
          video={video}
        />
      ))}
      <div className="form_box">
        <h2>Choose Your Stores
          <div>
            <label htmlFor='select__all'>Select All</label>
            <input 
              id='select__all'
              type='checkbox'
              onChange={selectAllHanderl}
              value='select__all'
              checked={selectAll}
            />
          </div>
        </h2>
        <div className='checkbox__inputs__group'>
          {stores.map(input => (
            <div className='checkbox' key={input.value}>
              <label htmlFor={input.value}>
                <img src={input.img} alt={'platform__image'} />
                {input.text}
              </label>
              <input 
                id={input.value}
                type='checkbox'
                value={input.value}
                onChange={selectBox}
                checked={data.stores.includes(input.value)}
              />
            </div>
          ))}
        </div>
      </div>
      <button className='submit__btn' type='submit'>Save Changes</button>
    </form>
  )
}

export default DistributionForm