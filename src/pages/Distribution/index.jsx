import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import DistributionForm from '../../components/DistributionForm';

import './Distribution.css'

const initialize = {
  audio__language: 'En',
  stores: []
}

const Distribution = () => {

  const navigate = useNavigate();
  const [type, setType] = useState('image');
  const [data, setData] = useState(initialize);  
  const [video, setVideo] = useState(false);
  const [src, setSrc] = useState('https://www.idealchoob.ir/wp-content/uploads/2017/02/default-placeholder-1024x1024-959x540.png');

  const audioDetails = [
    {
      id: 1,
      title: 'Upload Audio',
      resources: [
        {
          id: 'track__name',
          placeholder: 'Trak Name',
          type: 'text'
        },
        {
          id: 'track__file',
          placeholder: 'Add Track',
          type: 'file'
        },
      ]
    },
    {
      id: 2,
      title: 'Audio Metadata',
      resources: [
        {
          id: 'track__name',
          placeholder: 'Trak Name',
          type: 'text'
        },
        {
          id: 'track__version',
          placeholder: 'Track version',
          type: 'text'
        },
        {
          id: 'track__number',
          placeholder: 'Trak Number',
          type: 'number'
        },
        {
          id: 'artist__name',
          placeholder: 'Artist Name',
          type: 'text'
        },
        {
          id: 'ISRC__Codes',
          placeholder: 'ISRC Codes',
          type: 'text'
        },
        {
          id: 'explicit__content',
          placeholder: 'Explicit Content',
          type: 'select__box',
          options: [
            'No Explicit',
            'Explicit',
            'Cleaned Version'
          ]
        },
        {
          id: 'audio__language',
          placeholder: 'Audio Language',
          type: 'select__box',
          options: [
            'En',
            'Ar'
          ]
        }
      ]
    }
  ];

  const albumDetails = [
    {
      id: 1,
      title: 'Upload Album',
      resources: [
        {
          id: 'album__file',
          placeholder: 'Add Image',
          type: 'file'
        },
      ]
    },
    {
      id: 2,
      title: 'Album Details',
      resources: [
        {
          id: 'language',
          placeholder: 'Language',
          type: 'select__box',
          options: [
            'En',
            'Ar'
          ]
        },
        {
          id: 'album__name',
          placeholder: 'Album/Single/EP Title',
          type: 'text'
        },
        {
          id: 'album__version',
          placeholder: 'Album version',
          type: 'text'
        },
        {
          id: 'compilation__album',
          placeholder: 'Compilation Album',
          type: 'select__box',
          options: [
            'Yes',
            'No'
          ]
        },
        {
          id: 'artist__name',
          placeholder: 'Artist Name',
          type: 'text'
        },
        {
          id: 'primary__genre',
          placeholder: 'primary Genre',
          type: 'select__box',
          options: [
            'Alternative',
            'Anime',
            'Blues'
          ]
        },
        {
          id: 'composition__copyright',
          placeholder: 'Composition Copyright',
          type: 'text'
        },
        {
          id: 'sound__recording__copyright',
          placeholder: 'Sound Recording Copyright',
          type: 'text'
        },
        {
          id: 'record__label__name',
          placeholder: 'Record Label Name',
          type: 'text'
        },
        {
          id: 'originally__released',
          placeholder: 'Originally Released',
          type: 'date'
        },
        {
          id: 'pre__order__date',
          placeholder: 'Pre Order Date',
          type: 'date'
        },
        {
          id: 'salse__start__date',
          placeholder: 'Salse Start Date',
          type: 'date'
        },
        {
          id: 'explicit__content',
          placeholder: 'Explicit Content',
          type: 'select__box',
          options: [
            'No Explicit',
            'Explicit',
            'Cleaned Version'
          ]
        },
      ]
    }
  ];

  const videoDetails = [
    {
      id: 1,
      title: 'Upload Album',
      resources: [
        {
          id: 'track__file',
          placeholder: 'Add Image',
          type: 'file'
        },
      ]
    },
    {
      id: 2,
      title: 'Album Details',
      resources: [
        {
          id: 'language',
          placeholder: 'Language',
          type: 'select__box',
          options: [
            'En',
            'Ar'
          ]
        },
        {
          id: 'album__name',
          placeholder: 'Album/Single/EP Title',
          type: 'text'
        },
        {
          id: 'album__version',
          placeholder: 'Album version',
          type: 'text'
        },
        {
          id: 'compilation__album',
          placeholder: 'Compilation Album',
          type: 'select__box',
          options: [
            'Yes',
            'No'
          ]
        },
        {
          id: 'artist__name',
          placeholder: 'Artist Name',
          type: 'text'
        },
        {
          id: 'primary__genre',
          placeholder: 'primary Genre',
          type: 'select__box',
          options: [
            'Alternative',
            'Anime',
            'Blues'
          ]
        },
        {
          id: 'composition__copyright',
          placeholder: 'Composition Copyright',
          type: 'text'
        },
        {
          id: 'sound__recording__copyright',
          placeholder: 'Sound Recording Copyright',
          type: 'text'
        },
        {
          id: 'record__label__name',
          placeholder: 'Record Label Name',
          type: 'text'
        },
        {
          id: 'originally__released',
          placeholder: 'Originally Released',
          type: 'date'
        },
        {
          id: 'pre__order__date',
          placeholder: 'Pre Order Date',
          type: 'date'
        },
        {
          id: 'salse__start__date',
          placeholder: 'Salse Start Date',
          type: 'date'
        },
        {
          id: 'explicit__content',
          placeholder: 'Explicit Content',
          type: 'select__box',
          options: [
            'No Explicit',
            'Explicit',
            'Cleaned Version'
          ]
        },
      ]
    }
  ];

  return (
    <>
      <div className='dist__header'>
        <div className="container">
          <div className="header__content">
            <div className="links">
              <button onClick={() => navigate(-1)}>Back</button>
              <Link to='/'>Home</Link>
            </div>
            <h4 className='dist_title'>Distribute Images / Audios / Videos</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="dist__page">
          <ul className='buttons__list'>
            <li>
              <button 
                className={`${type === 'image' ? 'active' : ''} image`} 
                onClick={() => {
                  setType('image');
                  setData(initialize);
                  setSrc('https://www.idealchoob.ir/wp-content/uploads/2017/02/default-placeholder-1024x1024-959x540.png')
                }}
              >
                Images
              </button>
            </li>
            <li>
              <button 
                className={`${type === 'audios' ? 'active' : ''} audio`}
                onClick={() => {
                  setType('audios')
                  setData(initialize);
                  setSrc('https://www.idealchoob.ir/wp-content/uploads/2017/02/default-placeholder-1024x1024-959x540.png')
                }}
              >
                Audios
              </button>
            </li>
            <li>
              <button 
                className={`${type === 'videos' ? 'active' : ''} video`} 
                onClick={() => {
                  setType('videos')
                  setData(initialize);
                  setSrc('https://www.idealchoob.ir/wp-content/uploads/2017/02/default-placeholder-1024x1024-959x540.png')
                }}
              >
                Videos
              </button>
            </li>
          </ul>
          <DistributionForm 
            data={data}
            setData={setData}
            src={src}
            setSrc={setSrc}
            setVideo={setVideo}
            video={video}
            type={type} 
            details={type === 'audios' ? audioDetails : type === 'image' ? albumDetails : videoDetails} 
          />
        </div>
      </div>
    </>
  )
}

export default Distribution