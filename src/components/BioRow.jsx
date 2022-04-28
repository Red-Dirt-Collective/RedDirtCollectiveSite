import React from 'react'

export default function BioRow({image, imageAlign = 'left', bioText, title}) {
  return (
    <div className='rdc-bio-row'>
      {imageAlign !== 'right' && (
        <div className='rdc-bio-row-image-container left'>
          <img className='rdc-bio-row-image' src={image} />
        </div>
      )}
      <div className='rdc-bio-row-text'>
        <div className='rdc-bio-row-title'>{title}</div>
        {bioText}
      </div>
      {imageAlign === 'right' && (
        <div className='rdc-bio-row-image-container right'>
          <img className='rdc-bio-row-image' src={image} />
        </div>
      )}
    </div>
  )
}
