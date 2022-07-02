import React, { useState, useRef, useEffect } from 'react'
import './GiftCardTemplate.scss'
import { giftcardtemplates } from '../../data/templates'

const GiftCardTemplate = ({ handleSelectedTemplate }) => {
  const [activeEdit, setActiveEdit] = useState(null)

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

  //handling blur event
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
            className={index === activeEdit ? 'active-edit-card' : ''}
            key={index}
            onClick={() => {
              handleSelectedTemplate(id)
              setActive(index)
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
