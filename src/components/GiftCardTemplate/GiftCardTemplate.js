import React, { useState, useRef, useEffect } from 'react'
import './GiftCardTemplate.scss'
import { giftcardtemplates } from '../../data/templates'

const GiftCardTemplate = ({ handleSelectedTemplate }) => {
<<<<<<< HEAD
  const [activeEdit, setActiveEdit] = useState(null)
=======
  const [activeCard, setActiveCard] = useState(null);
>>>>>>> 9c209c70b4c1228056c47f3d9ea680ab534f9a54

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

<<<<<<< HEAD
  //ref for targetting active template
  const activeTemplate = useRef(false)

  //setting active template index
  const setActive = (index) => {
    setActiveEdit(index)
    activeTemplate.current = true
  }
=======
  //ref for targetting active gift card template
  const activeTemplate = useRef(false);

  //setting active gift card template index
  const handleActiveCard = (index) => {
    setActiveCard(index);
    activeTemplate.current = true;
  };
>>>>>>> 9c209c70b4c1228056c47f3d9ea680ab534f9a54

  //handling blur event to set any
  // active gift card template to non-active
  const handleClickOutside = () => {
    if (activeTemplate.current) {
<<<<<<< HEAD
      setActiveEdit(null)
      activeTemplate.current = false
=======
      setActiveCard(null);
      activeTemplate.current = false;
>>>>>>> 9c209c70b4c1228056c47f3d9ea680ab534f9a54
    }
  }

  return (
    <div className='gc-template'>
      {giftcardtemplates.map((template, index) => {
        const { id, image, text } = template
        return (
          <span
            ref={activeTemplate}
<<<<<<< HEAD
            className={index === activeEdit ? 'active-edit-card' : ''}
            key={index}
            onClick={() => {
              handleSelectedTemplate(id)
              setActive(index)
=======
            className={index === activeCard ? "active-edit-card" : ""}
            key={index}
            onClick={() => {
              handleSelectedTemplate(id);
              handleActiveCard(index);
>>>>>>> 9c209c70b4c1228056c47f3d9ea680ab534f9a54
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
