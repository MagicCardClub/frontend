import React, { useState, useEffect } from 'react'
import './EditCardModal.scss'
import { blankCard } from '../../data/blankCard'

const EditCardModal = ({ selectedTemplate }) => {
  const [cards, setCards] = useState(blankCard)
  const [index, setIndex] = useState(selectedTemplate)

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleBlankIndex()
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [selectedTemplate])

  const handleBlankIndex = (selectedTemplate) => {
    if (selectedTemplate > cards.length) {
      setIndex(0)
    }
  }

  const { image, text } = cards[index]
  return (
<<<<<<< HEAD
    <div className='edit-card_modal'>
=======
    <div className="blank_card">
>>>>>>> 9c209c70b4c1228056c47f3d9ea680ab534f9a54
      <img src={image} alt={text} />
    </div>
  )
}

export default EditCardModal
