import React, { useState, useRef, useEffect } from 'react'
import './GiftCardTemplate.scss'
import { giftcardtemplates } from 'data/templates'

const GiftCardTemplate = ({ handleSelectedTemplate }) => {
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  //ref for targetting active template
  const activeTemplate = useRef(false)

  //setting active template index
  const setActive = (index) => {
    setActiveEdit(index)
    activeTemplate.current = true
  }

  //handling blur event to set any
  // active gift card template to non-active
  const handleClickOutside = () => {
    if (activeTemplate.current) {
      setActiveEdit(null)
      activeTemplate.current = false
    }
  }

  return (
    <div className='gc-template'>
      {giftcardtemplates.map((template, index) => {
        const { id, image, text } = template
        return (
          <span
            ref={activeTemplate}
            className={index === activeCard ? 'active-edit-card' : ''}
            key={id}
            onClick={() => {
              handleSelectedTemplate(index)
              handleActiveCard(index)
            }}
          >
            <img
              src={image}
              alt={text}
              style={{ width: '100px', height: '110px' }}
            />
          </span>
        )
      })}
    </div>
  )
}

export default GiftCardTemplate
