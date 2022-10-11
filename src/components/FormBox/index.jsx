import React from 'react'

const FormBox = ({ title, inputs, data, setData, type, src, setSrc, setVideo, video }) => {

  const addImageUserHandler = (input) => {
    if(type === 'videos') {
      setVideo(true)
    }
    let files = input.target.files;
    let reader = new FileReader();

    reader.onload = e => {
      setSrc(e.target.result);
      setData({...data, [input.target.id]: e.target.result})
    };
    reader.readAsDataURL(files[0]);   
  };

  return (
    <>
      {title === 'Upload Album' ? type === 'image' ? (
        <img style={{
          height: '400px',
          margin: '0 auto',
          display: 'block'
        }} src={data?.album__file || src} alt="" />
      ) : type === 'videos' ? video ?
        (
          <video style={{
            height: '400px',
            margin: '0 auto',
            display: 'block'
          }} src={data?.album__file || src} alt="" />
        )
      :
          (
            <img style={{
              height: '400px',
              margin: '0 auto',
              display: 'block'
            }} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAHlBMVEXm5uPS0s/h4d7e3tvU1NHX19Tk5OHZ2dbc3Nng4N1TGq24AAABf0lEQVR4nO3by46CQBBAUVB88P8/PIkzozyqmwoYFp1zli4qcoOh6dhdBwAAAAAAAAAAAAAAAAAAAAA07jr0uwzPaNqtv519Aee57Sv1qhVPu5x/Eed47k/Vr2+hV/hmWx1J1ff3+bDfe7TVVpdjrcbZsL+fc6utxmOtrtNZ/8+IVlsdvK+mrd4PCa22Wn2ep1pttJosPbSqt5qu0rSqtpotaLWqtZqv/bWqtFq8JmlVbrV8o9Sq2Gr18q1VqdV6n0KrQqtgS0er0PgIPtQqFG6papWnlVZa5WmVp1WeVnla5WmVp1WeVnla5WmVp1WeVnla5R3dF402sLQKjV0QS6vQtQtiaVVqtY6lVbHVKpZW5VbLWFpVWi1iaVVrNY+lVbXVLJZW9VbTWFpttJrE0mqr1SdWq62cBcj76hmToe1W3z27NLTdKvoDVdrqTNzQdKtoUyUtntZuq+6xt9YjmjZEp1Ubct+lNOzUrw4AAAAAAAAAAAAAAAAAAAAA3/IDs0cSzUEOWdMAAAAASUVORK5CYII='} alt="" />
          )
      : (<></>) : (<></>)}
      <div className="form_box">
        <h2>{title}</h2>
        <div className='inputs__group'>
            {inputs.map(input => (
              input.type === 'select__box' ? (
                <div className='input__controle' key={input.id}>
                  <label htmlFor={input.id}>{input.placeholder}:</label>
                  <select 
                    defaultValue={input?.options[0]} 
                    onChange={(e) => setData({...data, [input.id]: e.target.value})}
                  >
                    {input?.options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ) :
              input.type === 'file' ? (
                <div className='input__controle' key={input.id}>
                  <label htmlFor={input.id}>{input.placeholder}:</label>
                  <input 
                    id={input.id}
                    type={input.type}
                    // onChange={(e) => setData({...data, [input.id]: e.target.value})}
                    onChange={addImageUserHandler}
                    // value={data[input.id] || null}
                    accept={type === 'image' ? 'image/*' : type === 'audios' ? 'audio/*' : 'video/*'}
                  />
                </div>
              )
              : (
                <div className='input__controle' key={input.id}>
                  <label htmlFor={input.id}>{input.placeholder}:</label>
                  <input 
                    id={input.id}
                    type={input.type}
                    // placeholder={input.placeholder}
                    onChange={(e) => setData({...data, [input.id]: e.target.value})}
                    value={data[input.id] || ''}
                  />
                </div>
              )
            ))}
          </div>
      </div>
    </>
  )
}

export default FormBox